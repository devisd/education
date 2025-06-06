import { SearchLink } from '../components/common/SiteSearch';

export function flattenMenu(menu: any[]): SearchLink[] {
    let result: SearchLink[] = [];
    for (const item of menu) {
        if (item.href) result.push({
            title: item.title,
            href: item.href,
            category: 'Меню',
            description: item.description
        });
        if (item.children) result = result.concat(flattenMenu(item.children));
    }
    return result;
}

export function extractTextFromContent(content: any[]): string {
    if (!Array.isArray(content)) return '';
    return content.map(block => {
        if (block.children) {
            return block.children.map((child: any) => {
                if (child.text) return child.text;
                if (child.children) return extractTextFromContent(child.children);
                return '';
            }).join(' ');
        }
        return '';
    }).join(' ');
} 