/// <reference types="astro/client" />
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}

interface OpenGraphMusicSong {}

interface OpenGraphMusicAlbum {}

interface OpenGraphMusicPlaylist {}

interface OpenGraphMusicRadioStation {}

interface OpenGraphImage {
	source: ImageMetadata | URL | string;
	width: number;
	height: number;
	type: string;
	alt: string;
}

interface OpenGraphVideo {
	source: URL | string;
	width: number;
	height: number;
	type: string;
	alt: string;
}

interface OpenGraphAudio {
	source: URL | string;
	type: string;
}

interface OpenGraph {
	title: string;
	type: string;
	image: ImageMetadata;
	url: URL | string;
	audio: URL | string;
	description: string;
	determiner: string;
	locale: string;
	locale_alternate: Array<string>;
	site_name: string;
	video: string;
}

interface PageProps {
	title: string;
	description: string;
}
