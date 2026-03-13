import { PageHeader } from '@/components/ui/PageHeader'
import { Callout } from '@/components/ui/Callout'
import { CodeBlock } from '@/components/ui/CodeBlock'
import styles from './Accessibility.module.css'

export default function Accessibility() {
  return (
    <div>
      <PageHeader
        badge="Guidelines"
        title="Acessibilidade"
        description="Critérios obrigatórios para todos os componentes e interfaces do Cycle Design. Seguimos WCAG 2.1 nível AA como piso mínimo."
      />

      <Callout type="info" title="Acessibilidade não é opcional">
        <p>
          Todo componente marcado como <strong>stable</strong> no Cycle Design deve passar
          o checklist desta página. Acessibilidade é parte da definição de pronto —
          não um refinamento posterior.
        </p>
      </Callout>

      {/* ── 1. CONTRASTE ─────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>1. Contraste de cores</h2>
        <p className={styles.p}>
          Use apenas tokens com contraste suficiente para o contexto de uso.
          Os limiares do WCAG 2.1 são: <strong>4.5:1</strong> para texto normal,{' '}
          <strong>3:1</strong> para texto grande (≥ 18pt regular / ≥ 14pt bold) e elementos
          de UI (bordas de input, ícones informativos).
          A aba <strong>Colors → Text</strong> e <strong>Colors → Foreground</strong> na
          documentação de tokens mostra badges de contraste por token.
        </p>

        <h3 className={styles.h3}>Tokens com restrições em light mode</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Ratio light</th>
                <th>Condição de uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>--text-quaternary</code></td>
                <td><span className={styles.chipWarn}>4.6:1</span></td>
                <td>Apenas sobre <code>--bg-primary</code> (#FFFFFF). Proibido sobre bg-secondary ou bg-tertiary.</td>
              </tr>
              <tr>
                <td><code>--text-brand-primary</code></td>
                <td><span className={styles.chipWarn}>4.0:1</span></td>
                <td>Somente texto grande ou decorativo. Decisão de identidade — primitivo não alterável.</td>
              </tr>
              <tr>
                <td><code>--text-private-primary</code></td>
                <td><span className={styles.chipWarn}>3.4:1</span></td>
                <td>Somente texto grande ou ícones UI. Para corpo de texto usar <code>--text-private-secondary</code> (7.1:1).</td>
              </tr>
              <tr>
                <td><code>--text-warning-primary</code></td>
                <td><span className={styles.chipWarn}>4.1:1</span></td>
                <td>Somente texto grande em light mode. Dark mode passa AA sem restrição.</td>
              </tr>
              <tr>
                <td><code>--text-group-primary</code></td>
                <td><span className={styles.chipFail}>2.4:1</span></td>
                <td>Somente decorativo. Nunca texto ou ícone informativo em light mode. Usar <code>--text-group-secondary</code> (6.1:1).</td>
              </tr>
              <tr>
                <td><code>--fg-warning-primary</code></td>
                <td><span className={styles.chipWarn}>4.1:1</span></td>
                <td>Somente ícones UI (limiar 3:1). Não usar para texto.</td>
              </tr>
              <tr>
                <td><code>--fg-quaternary</code></td>
                <td><span className={styles.chipFail}>2.4:1</span></td>
                <td>Somente disabled e decorativo. Nunca ícone informativo.</td>
              </tr>
              <tr>
                <td><code>--fg-group-primary</code></td>
                <td><span className={styles.chipFail}>2.4:1</span></td>
                <td>Decorativo apenas em light mode. Revisão visual pendente no Figma.</td>
              </tr>
              <tr>
                <td><code>--fg-group-secondary</code></td>
                <td><span className={styles.chipFail}>1.7:1</span></td>
                <td>Decorativo apenas em light mode.</td>
              </tr>
              <tr>
                <td><code>--fg-warning-secondary</code></td>
                <td><span className={styles.chipFail}>2.0:1</span></td>
                <td>Decorativo apenas em light mode.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="warning" title="Fundos sólidos exigem texto escuro">
          <p>
            <code>--bg-group-solid</code> (2.4:1 branco) e <code>--bg-warning-solid</code> (2.7:1 branco)
            não suportam texto branco. Use obrigatoriamente <code>--text-primary</code> (#181D27)
            sobre esses fundos. Veja a tabela completa em <strong>Colors → Background</strong>.
          </p>
        </Callout>
      </section>

      {/* ── 2. ESTADOS DE FOCO ───────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>2. Estados de foco</h2>
        <p className={styles.p}>
          Todo elemento interativo deve ter indicador visual de foco visível para usuários
          de teclado. Use sempre <code>:focus-visible</code> — nunca <code>:focus</code> genérico,
          que dispara também em cliques com mouse.
        </p>

        <Callout type="warning" title="outline: none é proibido sem substituto">
          <p>
            Remover o outline sem fornecer um substituto visual é uma violação direta de
            WCAG 2.4.7 (Focus Visible). Se <code>overflow: hidden</code> no container
            bloquear o outline, use <code>box-shadow</code> duplo como substituto.
          </p>
        </Callout>

        <h3 className={styles.h3}>Padrão com outline (padrão global)</h3>
        <CodeBlock language="css" code={`/* Definido globalmente em docs.css — não redefinir por componente */
:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}`} />

        <h3 className={styles.h3}>Fallback com box-shadow (quando overflow: hidden bloqueia outline)</h3>
        <CodeBlock language="css" code={`.button:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 var(--focus-ring-offset) var(--bg-primary),
    0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
}`} />
      </section>

      {/* ── 3. SEMÂNTICA E ARIA ──────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>3. Semântica e atributos ARIA</h2>
        <p className={styles.p}>
          HTML semântico correto reduz a necessidade de ARIA. Use elementos nativos sempre
          que possível — <code>{'<button>'}</code> para ações, <code>{'<a>'}</code> para
          navegação, <code>{'<nav>'}</code> para grupos de links.
          Adicione ARIA apenas quando o elemento nativo não for suficiente para comunicar
          papel, estado ou propriedade ao leitor de tela.
        </p>

        <div className={styles.patternList}>
          <div className={styles.patternRow}>
            <span>Padrão</span>
            <span>Atributo obrigatório</span>
            <span>Exemplo</span>
          </div>
          <div className={styles.patternRow}>
            <span>Botão icon-only</span>
            <span><code>aria-label</code></span>
            <span><code>{'<button aria-label="Fechar modal">'}</code></span>
          </div>
          <div className={styles.patternRow}>
            <span>Toggle (menu, accordion)</span>
            <span><code>aria-expanded</code></span>
            <span><code>{'<button aria-expanded={isOpen}>'}</code></span>
          </div>
          <div className={styles.patternRow}>
            <span>Link de navegação ativo</span>
            <span><code>aria-current="page"</code></span>
            <span><code>{'<a aria-current={isActive ? "page" : undefined}>'}</code></span>
          </div>
          <div className={styles.patternRow}>
            <span>Feedback de ação</span>
            <span><code>aria-live="polite"</code> + <code>aria-atomic="true"</code></span>
            <span><code>{'<span aria-live="polite" aria-atomic="true" className="sr-only">'}</code></span>
          </div>
          <div className={styles.patternRow}>
            <span>Modal / dialog</span>
            <span><code>role="dialog"</code> + <code>aria-labelledby</code> + <code>aria-modal="true"</code></span>
            <span><code>{'<div role="dialog" aria-labelledby="modal-title" aria-modal="true">'}</code></span>
          </div>
          <div className={styles.patternRow}>
            <span>Nav principal</span>
            <span><code>aria-label</code></span>
            <span><code>{'<nav aria-label="Seções da documentação">'}</code></span>
          </div>
        </div>
      </section>

      {/* ── 4. ÍCONES ────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>4. Ícones</h2>
        <p className={styles.p}>
          Todo ícone do Cycle Design exige uma das duas props: <code>decorative</code> (ícone
          puramente visual — oculto de leitores de tela) ou <code>aria-label</code> (ícone
          informativo — anunciado como seu nome). O TypeScript emite erro se nenhuma das duas
          for passada.
        </p>

        <CodeBlock language="tsx" code={`// Decorativo — acompanha texto visível, não precisa ser lido
<CheckIcon size="sm" decorative />

// Informativo — único indicador da ação, deve ter nome acessível
<CloseIcon size="sm" aria-label="Fechar" />`} />

        <Callout type="warning" title="Nunca SVG bare">
          <p>
            Usar <code>{'<svg>'}</code> diretamente sem <code>aria-label</code>,{' '}
            <code>aria-hidden="true"</code> ou <code>role="img"</code> deixa o elemento
            anunciável com conteúdo ininteligível para leitores de tela.
          </p>
        </Callout>
      </section>

      {/* ── 5. TIPOGRAFIA ────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>5. Tipografia</h2>
        <p className={styles.p}>
          Componentes e docs devem usar exclusivamente a{' '}
          <strong>escala tipográfica oficial do Cycle Design</strong> —
          tokens <code>--font-size-*</code> e <code>--line-height-*</code> definidos em{' '}
          <code>tokens/typography-primitives.css</code>. Valores fora da escala (ex: 13px,
          15px, 12.5px) não pertencem ao sistema e devem ser substituídos pelo token mais
          próximo ou solicitados como nova entrada no Figma antes de serem usados.
        </p>
        <p className={styles.p}>
          Os tokens de tipografia usam <code>rem</code>, o que garante que a preferência
          de tamanho de fonte do sistema operacional do usuário seja respeitada —
          um requisito implícito de WCAG 1.4.4 (Resize Text).
          Não use <code>px</code> hardcoded em <code>font-size</code>.
        </p>

        <CodeBlock language="css" code={`/* ❌ Proibido — valor fora da escala e unidade fixa */
.label { font-size: 13px; }

/* ✅ Correto — token da escala oficial em rem */
.label { font-size: var(--font-size-3xs); } /* 12px / 0.75rem */`} />
      </section>

      {/* ── 6. CHECKLIST DE APROVAÇÃO ───────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.h2}>6. Checklist de aprovação — componente stable</h2>
        <p className={styles.p}>
          Um componente só pode ser marcado como <strong>stable</strong> após passar
          todos os itens abaixo. Este checklist deve ser verificado pelo autor e pelo
          revisor antes do merge.
        </p>

        <div className={styles.checklist}>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon} aria-hidden="true" />
            <span className={styles.checkLabel}>
              <strong>Contraste verificado.</strong> Todos os tokens de cor usados têm
              contraste adequado para o contexto (texto normal 4.5:1, texto grande / UI 3:1).
              Tokens com badge <em>restrito</em> são usados apenas nas condições documentadas.
            </span>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon} aria-hidden="true" />
            <span className={styles.checkLabel}>
              <strong>Focus visible funciona.</strong> Navegar com Tab mostra indicador
              visível em todos os elementos interativos. <code>outline: none</code> não
              existe sem substituto com <code>box-shadow</code>.
            </span>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon} aria-hidden="true" />
            <span className={styles.checkLabel}>
              <strong>Nomes acessíveis presentes.</strong> Todo botão icon-only tem{' '}
              <code>aria-label</code>. Toda nav tem <code>aria-label</code>.
              Todo ícone tem <code>decorative</code> ou <code>aria-label</code>.
            </span>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon} aria-hidden="true" />
            <span className={styles.checkLabel}>
              <strong>Estados comunicados via ARIA.</strong> Toggles têm{' '}
              <code>aria-expanded</code>. Links ativos têm <code>aria-current</code>.
              Feedback de ação tem <code>aria-live="polite"</code>.
            </span>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon} aria-hidden="true" />
            <span className={styles.checkLabel}>
              <strong>HTML semântico correto.</strong> Ações usam <code>{'<button>'}</code>.
              Navegação usa <code>{'<a>'}</code>. Nenhum <code>{'<div onClick>'}</code>
              ou <code>{'<span onClick>'}</code> sem <code>role</code> e <code>tabIndex</code>.
            </span>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon} aria-hidden="true" />
            <span className={styles.checkLabel}>
              <strong>Tokens da escala oficial.</strong> Nenhum <code>font-size</code> em{' '}
              <code>px</code> hardcoded fora da escala. Todos os tamanhos usam{' '}
              <code>var(--font-size-*)</code>.
            </span>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon} aria-hidden="true" />
            <span className={styles.checkLabel}>
              <strong>Dark mode testado.</strong> O componente funciona visualmente
              em light e dark mode usando apenas tokens funcionais.
            </span>
          </div>
          <div className={styles.checkItem}>
            <div className={styles.checkIcon} aria-hidden="true" />
            <span className={styles.checkLabel}>
              <strong>Testado com teclado.</strong> Toda interação possível com mouse
              também é possível com teclado (Tab, Enter, Space, Escape quando aplicável).
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
