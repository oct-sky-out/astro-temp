import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import reactRenderer from "@astrojs/react/server.js";
import vueRenderer from "@astrojs/vue/server.js";
import { expect, test } from 'vitest';
import AstroStateTestComponent from '@/components/astro-component/AstroStateTestComponent.astro';

test('Astro server component render test', async () => {
	const container = await AstroContainer.create();
	container.addServerRenderer({name: reactRenderer.name, renderer: reactRenderer});
	container.addServerRenderer({name: vueRenderer.name, renderer: vueRenderer});
	container.addClientRenderer({
     name: "@astrojs/react",
     entrypoint: "@astrojs/react/client.js"
	});

	const result = await container.renderToString(AstroStateTestComponent, {});

	expect(result).toContain('Astro Nanostore State Test Component');
});
