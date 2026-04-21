export type Locale = 'en' | 'pt-BR';

export const defaultLocale: Locale = 'en';

interface LinkItem {
	key: string;
	title: string;
	description: string;
	href: string;
	comingSoon?: boolean;
}

interface LocaleContent {
	meta: {
		title: string;
		description: string;
	};
	controls: {
		switchLanguage: string;
		themeLight: string;
		themeDark: string;
	};
	hero: {
		name: string;
		subtitle: string;
		tagline: string;
	};
	sections: {
		links: string;
		about: string;
	};
	about: string;
	links: LinkItem[];
	footer: string;
	labels: {
		comingSoon: string;
	};
}

export const content: Record<Locale, LocaleContent> = {
	en: {
		meta: {
			title: 'Daniel | Software Engineer',
			description: 'Personal link hub and portfolio.',
		},
		controls: {
			switchLanguage: 'PT-BR',
			themeLight: 'Light',
			themeDark: 'Dark',
		},
		hero: {
			name: 'Daniel Tinois',
			subtitle: 'dev. | software engineering',
			tagline: 'Building reliable products with clean architecture and focused UX.',
		},
		sections: {
			links: 'Links',
			about: 'About',
		},
		about: 'Software developer focused on high-quality frontend and pragmatic engineering.',
		links: [
			{
				key: 'github',
				title: 'My GitHub',
				description: 'Code, experiments, and open source work.',
				href: 'https://github.com/danieltinois',
			},
			{
				key: 'portfolio',
				title: 'My Portfolio',
				description: 'My portfolio with additional information.',
				href: '#',
				comingSoon: true,
			},
			{
				key: 'blog',
				title: 'My Blog',
				description: 'Notes on engineering, product, and systems.',
				href: 'https://my-blog-zeta-lac.vercel.app',
			},
			{
				key: 'linkedin',
				title: 'My Linkedin',
				description: 'Connect with me on Linkedin.',
				href: 'https://www.linkedin.com/in/danieltinois/',
			},
			{
				key: 'future-shop',
				title: 'Future Shop',
				description: 'Products, templates and eBooks.',
				href: '#',
				comingSoon: true,
			},
		],
		footer: 'built by Daniel Tinois',
		labels: {
			comingSoon: 'Coming soon',
		},
	},
	'pt-BR': {
		meta: {
			title: 'Daniel | Engenharia de Software',
			description: 'Link hub e portfólio pessoal.',
		},
		controls: {
			switchLanguage: 'EN',
			themeLight: 'Claro',
			themeDark: 'Escuro',
		},
		hero: {
			name: 'Daniel Tinois',
			subtitle: 'dev. | engenharia de software',
			tagline: 'Construindo produtos confiáveis com arquitetura limpa e UX focada.',
		},
		sections: {
			links: 'Links',
			about: 'Sobre',
		},
		about: 'Desenvolvedor de software focado em frontend de alta qualidade e engenharia pragmática.',
		links: [
			{
				key: 'github',
				title: 'Meu GitHub',
				description: 'Código, experimentos e trabalho open source.',
				href: 'https://github.com/danieltinois',
			},
			{
				key: 'portfolio',
				title: 'Meu Portfólio',
				description: 'Meu portfólio com informações extras.',
				href: '#',
				comingSoon: true,
			},
			{
				key: 'blog',
				title: 'Meu Blog',
				description: 'Notas sobre engenharia, produto e sistemas.',
				href: 'https://my-blog-zeta-lac.vercel.app',
			},
			{
				key: 'linkedin',
				title: 'Meu Linkedin',
				description: 'Se conecte comigo no Linkedin.',
				href: 'https://www.linkedin.com/in/danieltinois/',
			},
			{
				key: 'future-shop',
				title: 'Loja Futura',
				description: 'Produtos, templates e eBooks.',
				href: '#',
				comingSoon: true,
			},
		],
		footer: 'feito por Daniel Tinois',
		labels: {
			comingSoon: 'Em breve',
		},
	},
};
