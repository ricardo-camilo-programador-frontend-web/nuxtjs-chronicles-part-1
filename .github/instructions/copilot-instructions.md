# Instruções para Agentes de IA - SGS Web

## Linguagem de Comunicação
- **Idioma obrigatório**: Português Brasileiro (pt-BR)
- Todas as revisões de código devem ser feitas em português brasileiro
- Todos os comentários, sugestões e explicações devem estar em português brasileiro
- Mensagens de erro e avisos devem ser traduzidas para português brasileiro
- Traduza termos técnicos quando apropriado, mas mantenha termos consolidados em inglês (ex: "refactoring", "performance", "debug")

## Visão Geral do Projeto
SGS (Sistema de Gestão de Sindicatos) é uma aplicação web PWA para gestão completa de sindicatos, incluindo cadastros, atendimentos, controle financeiro e analytics.

**Stack Tecnológica:**
- **Frontend**: Vue 3 + TypeScript + Vite + TailwindCSS v4
- **Gerenciamento de Estado**: Pinia com arquitetura base store reutilizável
- **Formulários**: FormKit (principal) + Vee-Validate + Yup
- **UI**: DaisyUI + Iconify + Auto-Animate
- **PWA**: Vite Plugin PWA + Workbox
- **Build**: Vite (porta 30000)
- **Deploy**: Netlify
- **Testes**: Playwright
- **Qualidade**: Biome + ESLint + Prettier

## Arquitetura e Organização

### Estrutura de Diretórios (`src/`)
```
src/
├── adapters/          # Adapters para APIs externas (ex: CNPJ com fallback automático)
├── components/        # Componentes Vue reutilizáveis
│   ├── cadastro/      # Componentes de cadastros específicos
│   ├── filtros/       # Filtros de pesquisa por módulo
│   ├── forms/         # Componentes de formulário reutilizáveis
│   ├── icons/         # Ícones customizados
│   └── servicos/      # Componentes de serviços
├── composables/       # Funções composable Vue (use-*)
├── config/            # Configurações da aplicação
├── constants/         # Constantes globais
├── layouts/           # Layouts de página
├── middleware/        # Middlewares de roteamento (auth, permissions)
├── models/            # Modelos de dados e tipos de domínio
├── router/            # Configuração de rotas Vue Router
├── stores/            # Pinia stores com arquitetura base
│   ├── utils/         # Base store e helpers reutilizáveis
│   └── templates/     # Templates para novos stores
├── types/             # Tipos TypeScript globais
├── utils/             # Funções utilitárias
└── views/             # Páginas da aplicação
```

### Arquitetura de Stores (Pinia)
**Sistema escalável com base store reutilizável** que elimina duplicação de código CRUD.

**Padrão obrigatório para novos stores:**
```typescript
import { defineStore } from 'pinia'
import { createBaseStore, type BaseEntityConfig } from '~/stores/utils'
import type { YourEntity } from '~/models/your-entity-model'

const config: BaseEntityConfig = {
  endpoint: '/your-endpoint',
  defaultFilterType: 'name', // 'name' | 'all' | 'codigo' | 'search'
  entityName: 'Sua Entidade',
  entityNamePlural: 'Suas Entidades',
}

export const useYourEntityStore = defineStore('yourEntity', () => {
  const baseStore = createBaseStore<YourEntity>(config)
  
  // Adicione métodos personalizados aqui se necessário
  
  return {
    ...baseStore,
    // ...métodos customizados
  }
})
```

**Funcionalidades incluídas automaticamente:**
- CRUD completo (`fetchItems`, `fetchById`, `createItem`, `updateItem`, `deleteItem`)
- Paginação com cache e TTL
- Pesquisa e filtros (`searchItems`)
- Loading states e error handling
- Persistência em localStorage (opcional via `store-persistence.ts`)
- Contadores (`countItems`)

**Referência:** Ver `src/stores/templates/store-template.ts` e `src/stores/utils/base-store.ts`

### Padrões de Componentes Vue

**Usar sempre `<script setup lang="ts">` com Composition API:**
```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import type { User } from '~/models/user-model'

// Props com interface e defaults
interface Props {
  user: User
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false
})

// Emits com tipagem forte
const emit = defineEmits<{
  update: [user: User]
  delete: [id: number]
}>()

// Estado reativo
const isEditing = ref(false)

// Computed properties
const displayName = computed(() => 
  `${props.user.firstName} ${props.user.lastName}`
)
</script>
```

**Auto-import de componentes:**
- Componentes em `src/components/` são auto-importados via `unplugin-vue-components`
- Não precisa import manual de componentes globais
- Configurado em `vite.config.ts` com `deep: true`

### Composables (Padrão `use-*`)

**Localização:** `src/composables/use-*.ts`

**Exemplos importantes:**
- `use-toast.ts` - Notificações SweetAlert2 padronizadas
- `use-sweetalert.ts` - Alertas e confirmações
- `use-selection-modal.ts` - Modais de seleção com paginação
- `use-store-persistence.ts` - Persistência de stores em localStorage
- `use-security.ts` - Verificação de permissões
- `use-form-errors.ts` - Tratamento de erros de formulário

**Padrão de retorno:**
```typescript
export function useYourComposable(params: Params) {
  const state = ref<State>(initialState)
  
  function action(): void {
    // lógica
  }
  
  return {
    // Estados (readonly quando apropriado)
    state: readonly(state),
    // Computeds
    computed: computed(() => ...),
    // Actions
    action,
  }
}
```


## Workflows de Desenvolvimento

### Setup Inicial
```bash
# Clone e instale
git clone --branch develop https://github.com/Consir-Informatica/SGS_WEB.git
cd SGS_WEB
pnpm i

# Configure variáveis de ambiente (.env)
VITE_API_URL=http://localhost:3000
VITE_SUPER_USER_ID=  # Opcional: ID do super usuário
VITE_TIME_TO_LIVE=60000  # Cache TTL em ms (padrão: 1 min)

# Gere ícones PWA (se necessário)
pnpm pwa:icons
```

### Comandos Essenciais
```bash
# Desenvolvimento (porta 30000)
pnpm dev

# Build de produção
pnpm build

# Preview da build
pnpm preview

# Testes E2E
pnpm test          # Executa testes Playwright
pnpm test:ui       # Interface UI do Playwright

# Validação e Qualidade
pnpm type-check    # Verificação TypeScript
pnpm lint          # ESLint
pnpm lint:fix      # ESLint com auto-fix
pnpm biome         # Biome check
pnpm biome:fix     # Biome com auto-fix
pnpm fix           # Executa lint:fix + biome:fix
pnpm validate      # type-check + lint

# CI Pipeline completo
pnpm ci            # type-check + lint + build + test

# Segurança
pnpm security      # Audit de dependências
```

### PWA e Service Worker
- Service Worker ativo **em desenvolvimento** para testes
- App Shell caching via Workbox
- Para limpar SWs antigos: Use DevTools > Application > Service Workers > Unregister
- Manifest configurado em `vite.config.ts` (VitePWA plugin)

### Configuração Vite
- **Porta:** 30000 (customizada para evitar conflitos)
- **Host:** `true` (permite acesso via LAN)
- **CORS:** Habilitado no dev server
- **Allowed Hosts:** `true` (aceita domínios personalizados)

## Diretrizes de Review de Código

### Filosofia de Review

* Comentar apenas quando houver **ALTA CONFIANÇA (>80%)** de que existe um problema
* Ser conciso: uma sentença por comentário quando possível
* Focar em feedback acionável, não em observações
* Ao revisar texto, comentar apenas em questões de clareza se o texto for genuinamente confuso ou puder levar a erros

### Áreas Prioritárias (Revisar Estas)

#### Segurança & Segurança

* Blocos de código inseguros sem justificativa
* Riscos de injeção de comando (comandos shell, input do usuário)
* Vulnerabilidades de path traversal
* Exposição de credenciais ou secrets hardcoded
* Validação de input faltando em dados externos
* Tratamento de erro inadequado que pode vazar informações sensíveis

#### Problemas de Correção

* Erros de lógica que podem causar crashes ou comportamento incorreto
* Race conditions em código assíncrono
* Vazamentos de recursos (arquivos, conexões, memória)
* Erros off-by-one ou condições de limite
* Propagação de erro incorreta (usar try/catch adequadamente)
* Tipos opcionais que não precisam ser opcionais
* Booleans que deveriam defaultar para `false` mas estão como opcionais
* Contexto de erro que não adiciona informação útil
* Código excessivamente defensivo com checks desnecessários
* Comentários desnecessários que apenas repetem comportamento óbvio do código

#### Arquitetura & Padrões

* Código que viola padrões existentes no codebase
* Tratamento de erro faltando (usar try/catch adequado)
* Uso incorreto de async/await ou operações bloqueantes em contextos async
* Implementações incorretas de interfaces/padrões Vue
* Violação dos padrões de stores (não usar `createBaseStore()` quando apropriado)
* Uso incorreto da Composition API do Vue 3

### Contexto do Projeto

* Este é um projeto Vue 3 + TypeScript + Vite
* Stack: Pinia, FormKit, TailwindCSS v4, DaisyUI
* Ferramentas de qualidade: Biome + ESLint + Prettier
* Testes: Playwright
* Ver padrões em `src/stores/templates/` e `src/components/`
* Tratamento de erro: Usar try/catch adequadamente, não ignorar erros silenciosamente
* Runtime assíncrono: Vue 3 Composition API com async/await

### Contexto do CI Pipeline

**Importante**: Revisar PRs imediatamente, antes do CI completar. Não sinalizar issues que o CI vai pegar.

#### O que o CI Verifica

**Verificações de qualidade:**

* `pnpm type-check` - Verificação TypeScript
* `pnpm lint` - ESLint
* `pnpm biome` - Biome check
* `pnpm test` - Testes Playwright
* `pnpm build` - Build de produção

**Setup que o CI executa:**

* Instala dependências do sistema
* Executa `pnpm ci` que roda: type-check + lint + build + test
* Cache de dependências npm/pnpm

**Insight importante**: Comandos como `npx` verificam node_modules local primeiro. Não sinalizar estes como quebrados a menos que o CI não os trate.

### Pular Estes (Baixo Valor)

Não comentar em:

* Estilo/formatação (Prettier, Biome)
* Avisos do ESLint (o lint vai pegar)
* Falhas de teste (o CI vai pegar)
* Dependências faltando (pnpm ci cobre isso)
* Sugestões menores de nomenclatura
* Sugestões de adicionar comentários
* Refatoração a menos que esteja corrigindo um bug real
* Múltiplos issues em um comentário
* Sugestões de logging a menos que relacionadas a segurança
* Precisão pedante de texto a menos que afete o significado

### Formato de Resposta

1. Estado o problema (1 sentença)
2. Por que importa (1 sentença, se necessário)
3. Sugestão de correção (snippet ou ação específica)

**Exemplo:**
Este código pode lançar erro se o array estiver vazio. Considere usar `.at(0)` ou adicionar verificação de length.

### Quando Ficar em Silêncio

Se você está incerto se algo é um problema, não comente.

### 1. Qualidade e Boas Práticas
- Revisar aderência aos padrões do projeto
- Verificar uso correto da Composition API do Vue 3
- Validar tipagem TypeScript forte e completa
- Identificar código duplicado ou que pode ser refatorado
- Sugerir melhorias de performance
- Verificar memoização adequada (computed, useMemo, etc.)

### 2. Acessibilidade (WCAG 2.1 AA)
- Verificar atributos ARIA corretos e completos
- Validar hierarquia de headings (h1-h6)
- Checar contraste de cores adequado
- Garantir navegação por teclado funcional
- Verificar labels em formulários
- Validar textos alternativos em imagens
- Confirmar focus visible em elementos interativos

### 3. Padrões do Projeto
- **Componentes**: Usar Composition API com `<script setup lang="ts">`
- **Composables**: Criar funções reutilizáveis em `src/composables/use-*.ts`
- **Stores**: Usar `createBaseStore()` de `~/stores/utils` (ver templates)
- **Tipos**: Definir interfaces/types em `src/types/` ou `src/models/`
- **Constantes**: Centralizar em `src/constants/`
- **Estilos**: Preferir TailwindCSS v4 + DaisyUI, usar `<style scoped>` quando necessário
- **Imports**: Usar alias `~/` (ex: `import { X } from '~/utils/helpers'`)
- **FormKit**: Biblioteca principal para formulários (preferir sobre Vee-Validate)

**Exemplo de componente completo:**
```vue
<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Associado } from '~/models/associado-model'
import { useToast } from '~/composables/use-toast'

interface Props {
  associado: Associado
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false
})

const emit = defineEmits<{
  update: [associado: Associado]
  delete: [id: number]
}>()

const { showSuccess, showError } = useToast()
const isEditing = ref(false)

const displayName = computed(() => 
  `${props.associado.nome} - ${props.associado.codigo}`
)

async function handleSave() {
  try {
    emit('update', props.associado)
    showSuccess('Associado atualizado com sucesso')
  } catch (error) {
    showError('Erro ao atualizar associado')
  }
}
</script>

<template>
  <div class="shadow-xl card bg-base-100">
    <h2 class="card-title">{{ displayName }}</h2>
    <!-- conteúdo -->
  </div>
</template>
```

### 4. Segurança
- Validar sanitização de inputs
- Verificar proteção contra XSS
- Validar autenticação e autorização
- Checar exposição de dados sensíveis
- Verificar uso correto de variáveis de ambiente

### 5. Performance
- Identificar operações pesadas que podem ser otimizadas
- Verificar uso de lazy loading de componentes
- Validar paginação em listas grandes
- Sugerir debouncing/throttling quando apropriado
- Verificar virtualização de listas longas

### 6. Organização de Código
- Verificar separação de responsabilidades
- Validar nomenclatura clara e consistente
- Sugerir extração de lógica complexa para composables
- Verificar estrutura de pastas adequada
- Validar imports organizados

### 7. Testes
- Sugerir casos de teste importantes
- Verificar cobertura de edge cases
- Validar testes unitários para lógica crítica
- Sugerir testes E2E para fluxos importantes

### 8. Documentação
- Verificar JSDoc em funções complexas
- Validar comentários explicativos quando necessário
- Sugerir documentação para APIs públicas
- Verificar README atualizado quando aplicável

## Formato de Sugestões

Ao fazer sugestões, siga este formato em **português brasileiro**:

```markdown
### [Tipo] Título da Sugestão

**Problema**: Descreva o problema identificado

**Sugestão**: Explique a melhoria proposta

**Impacto**: Alto/Médio/Baixo - Explique o impacto da mudança

**Código Sugerido**:
```typescript
// Código melhorado aqui
```

**Referências**: Links relevantes (WCAG, Vue docs, etc.)
```

## Tipos de Sugestões
- **[Crítico]**: Bugs, vulnerabilidades de segurança, problemas que quebram a aplicação
- **[Importante]**: Problemas de acessibilidade, performance significativa, más práticas
- **[Melhoria]**: Otimizações, refatorações, melhorias de código
- **[Nitpick]**: Sugestões menores de estilo, convenções, organização

## Prioridades
1. 🔴 Segurança e bugs críticos
2. 🟠 Acessibilidade (WCAG 2.1 AA)
3. 🟡 Performance e experiência do usuário
4. 🟢 Qualidade de código e manutenibilidade
5. 🔵 Documentação e testes
6. ⚪ Estilo e convenções

## Exemplos de Boas Práticas

### Componente Vue 3
```typescript
<script setup lang="ts">
import { computed, ref } from 'vue'
import type { User } from '~/types/user'

interface Props {
  user: User
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false
})

const emit = defineEmits<{
  update: [user: User]
  delete: [id: string]
}>()

const isEditing = ref(false)

const displayName = computed(() => {
  return `${props.user.firstName} ${props.user.lastName}`
})
</script>
```

### Composable
```typescript
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count: Ref<number> = ref(initialValue)
  
  const doubled = computed(() => count.value * 2)
  
  function increment(): void {
    count.value++
  }
  
  function decrement(): void {
    count.value--
  }
  
  return {
    count: readonly(count),
    doubled,
    increment,
    decrement
  }
}
```

## Comandos Úteis
- `/review` - Revisar código completo em português brasileiro
- `/fix` - Sugerir correções para problemas identificados em português brasileiro
- `/explain` - Explicar código complexo em português brasileiro
- `/optimize` - Sugerir otimizações de performance em português brasileiro
- `/accessibility` - Revisar acessibilidade WCAG 2.1 AA em português brasileiro
- `/security` - Revisar aspectos de segurança em português brasileiro

## Observações Importantes
- Sempre priorize a experiência do usuário
- Mantenha o código simples e legível
- Prefira composição sobre herança
- Use TypeScript para garantir type safety
- Siga os princípios SOLID quando aplicável
- Mantenha componentes pequenos e focados
- **Sempre comunique em português brasileiro**
- **Traduza termos técnicos quando apropriado, mas mantenha termos consolidados em inglês (ex: "refactoring", "performance", "debug")**

## Recursos Importantes

### Documentação Técnica
- **Stores**: `src/stores/templates/README.md` - Guia completo da arquitetura de stores
- **Base Store**: `src/stores/utils/base-store.ts` - Implementação do store base
- **Componentes**: Ver exemplos em `src/components/` com auto-import configurado

### Padrões de Nomenclatura
- **Arquivos**: kebab-case (ex: `usuario-store.ts`, `use-toast.ts`)
- **Componentes Vue**: PascalCase (ex: `AddFavoriteModal.vue`, `FormContainer.vue`)
- **Composables**: prefixo `use-` (ex: `useToast`, `useSelectionModal`)
- **Stores**: sufixo `-store` (ex: `usuarioStore`, `servicosStore`)
- **Tipos/Interfaces**: PascalCase (ex: `Usuario`, `BaseEntityConfig`)

### Integração com APIs Externas
- **CNPJ Adapter**: `src/adapters/cnpj-adapter/` 
  - Sistema de fallback automático entre múltiplas APIs de CNPJ
  - Exemplo de padrão adapter para integração com serviços externos
  - Ver `factory.ts` para entender o sistema de fallback