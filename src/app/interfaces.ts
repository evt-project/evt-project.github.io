export interface CardData {
    title: string;
    image: string;
    links: CardLink[];
}

export interface CardLink {
    title: string;
    url: string;
    label?: string;
    icon?: string[];
}

export interface VersionData extends CardData {
    enabled: boolean;
    demo?: string;
    download?: {
        link: string;
        label: string;
        title: string;
    };
    github?: string;
    bugs?: string;
}
