// docs/assets/js/checklist-manager.js

class ChecklistManager {
    constructor() {
        this.storageKey = 'ong_portal_checklist_progress';
        this.state = this.loadState();
        this.init();
    }

    loadState() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : {};
    }

    saveState() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    }

    init() {
        this.bindCheckboxes();
        this.renderAllProgressBars();
    }

    bindCheckboxes() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][data-id]');
        
        checkboxes.forEach(box => {
            const id = box.getAttribute('data-id');
            
            if (this.state[id]) {
                box.checked = true;
            }

            box.addEventListener('change', (e) => {
                if (e.target.checked) {
                    this.state[id] = true;
                } else {
                    delete this.state[id];
                }
                this.saveState();
                this.renderAllProgressBars(); // Atualiza sem destruir o HTML!
            });
        });
    }

    calculateProgress(idList) {
        if (!idList || idList.length === 0) return { checked: 0, total: 0, percentage: 0 };
        
        const total = idList.length;
        const checked = idList.filter(id => this.state[id]).length;
        const percentage = Math.round((checked / total) * 100);
        
        return { checked, total, percentage };
    }

    renderAllProgressBars() {
        // 1. Atualiza Widgets de Categorias Específicas
        const categoryWidgets = document.querySelectorAll('.category-progress-widget');
        categoryWidgets.forEach(widget => {
            const category = widget.getAttribute('data-category');
            const title = widget.getAttribute('data-title');
            const idList = ChecklistDB[category] || [];
            
            const progress = this.calculateProgress(idList);
            this.updateOrInjectWidget(widget, progress, title);
        });

        // 2. Atualiza Widget de Progresso Geral
        const globalWidgets = document.querySelectorAll('.global-progress-widget');
        globalWidgets.forEach(widget => {
            const title = widget.getAttribute('data-title');
            const allIds = getAllSiteIds();
            
            const progress = this.calculateProgress(allIds);
            this.updateOrInjectWidget(widget, progress, title);
        });
    }

    // NOVA LÓGICA: Atualiza se já existir, injeta apenas se for a primeira vez
    updateOrInjectWidget(container, progress, title) {
        if (progress.total === 0) {
            container.innerHTML = '';
            return;
        }

        const label = `${title} (${progress.checked} / ${progress.total})`;
        const circle = container.querySelector('.radial-progress-circle');
        const text = container.querySelector('.radial-progress-text');
        const labelDiv = container.querySelector('.radial-progress-label');

        // Se o widget já existe na tela, apenas altera as propriedades (efeito 100% smooth)
        if (circle && text && labelDiv) {
            circle.style.setProperty('--percentage', progress.percentage);
            text.innerText = `${progress.percentage}%`;
            labelDiv.innerText = label;
        } 
        // Se é a primeira vez que a página carrega, cria a estrutura básica zerada
        else {
            container.innerHTML = `
                <div class="radial-progress-container">
                    <div class="radial-progress-circle" style="--percentage: 0;">
                        <span class="radial-progress-text">0%</span>
                    </div>
                    <div class="radial-progress-label">${label}</div>
                </div>
            `;

            // Ativa a animação inicial do 0 até o valor salvo após 10ms
            const newCircle = container.querySelector('.radial-progress-circle');
            const newText = container.querySelector('.radial-progress-text');
            setTimeout(() => {
                if (newCircle && newText) {
                    newCircle.style.setProperty('--percentage', progress.percentage);
                    newText.innerText = `${progress.percentage}%`;
                }
            }, 10);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.checklistManager = new ChecklistManager();
});