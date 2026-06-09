import os
import re
import json

def on_pre_build(config, **kwargs):
    docs_dir = config['docs_dir']
    db = {}
    
    # Padrões para encontrar a categoria e os IDs no texto
    category_re = re.compile(r'data-category=["\']([^"\']+)["\']')
    checkbox_re = re.compile(r'<input[^>]+data-id=["\']([^"\']+)["\']')
    
    # Vasculha todas as pastas dentro de docs/
    for root, dirs, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    cat_match = category_re.search(content)
                    if cat_match:
                        category = cat_match.group(1)
                        ids = checkbox_re.findall(content)
                        if category not in db:
                            db[category] = []
                        db[category].extend(ids)
                        
    # Monta o conteúdo do arquivo JavaScript
    js_content = f"""// ARQUIVO GERADO AUTOMATICAMENTE. NÃO EDITE MANUALMENTE.
const ChecklistDB = {json.dumps(db, indent=4)};

const getAllSiteIds = () => {{
    return Object.values(ChecklistDB).flat();
}};
"""
    
    js_path = os.path.join(docs_dir, 'assets', 'js', 'checklist-database.js')
    os.makedirs(os.path.dirname(js_path), exist_ok=True)
    
    if os.path.exists(js_path):
        with open(js_path, 'r', encoding='utf-8') as f:
            old_content = f.read()
            if old_content == js_content:
                return 
                
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"[Portal entre amigos] Banco de dados atualizado! {sum(len(v) for v in db.values())} IDs mapeados.")