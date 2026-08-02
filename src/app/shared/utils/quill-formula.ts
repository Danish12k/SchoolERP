import katex from 'katex';
import Quill from 'quill';

let formulaRegistered = false;

export function registerQuillFormula(): void {
  if (formulaRegistered) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Embed: any = Quill.import('blots/embed');

  class FormulaBlot extends Embed {
    static create(value: string) {
      const node = super.create();
      if (typeof value === 'string') {
        try {
          katex.render(value, node, {
            throwOnError: false,
            displayMode: false,
          });
        } catch {
          node.textContent = value;
        }
        node.setAttribute('data-value', value);
      }
      return node;
    }

    static value(node: HTMLElement) {
      return node.getAttribute('data-value');
    }
  }

  FormulaBlot.blotName = 'formula';
  FormulaBlot.tagName = 'span';
  FormulaBlot.className = 'ql-formula';

  Quill.register(FormulaBlot, true);
  formulaRegistered = true;
}
