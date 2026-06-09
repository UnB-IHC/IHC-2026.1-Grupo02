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
                this.renderAllProgressBars();
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
        const categoryWidgets = document.querySelectorAll('.category-progress-widget');
        categoryWidgets.forEach(widget => {
            const category = widget.getAttribute('data-category');
            const title = widget.getAttribute('data-title');
            const idList = ChecklistDB[category] || [];
            
            const progress = this.calculateProgress(idList);
            this.injectHTML(widget, progress, title);
        });

        const globalWidgets = document.querySelectorAll('.global-progress-widget');
        globalWidgets.forEach(widget => {
            const title = widget.getAttribute('data-title');
            const allIds = getAllSiteIds();
            
            const progress = this.calculateProgress(allIds);
            this.injectHTML(widget, progress, title);
        });
    }

    injectHTML(container, progress, title) {
        if (progress.total === 0) {
            container.innerHTML = '';
            return;
        }

        const label = `${title} (${progress.checked} / ${progress.total})`;
        
        container.innerHTML = `
            <div class="radial-progress-container">
                <div class="radial-progress-circle" style="--percentage: ${progress.percentage};">
                    <span class="radial-progress-text">${progress.percentage}%</span>
                </div>
                <div class="radial-progress-label">${label}</div>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.checklistManager = new ChecklistManager();
});