import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { plumeTheme } from 'vuepress-theme-plume'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
	bundler: viteBundler(),
	base: '/phonics/',
	theme: defaultTheme({
		//sidebar: ["/英语自然拼读法.md", "/phonetic.html", "/字母及字母组合发音规律.md"],
		sidebar: [
			{
			text: "英语自然拼读法",
			link: "/英语自然拼读法.md",
			icon: "lightbulb",
			// 仅在 `/zh/guide/` 激活
			//activeMatch: "^/zh/guide/$",
			},
			//{ text: "48个国际音标", link: "/phonics/phonetic.html", icon: "config" },
			{ text: "48个国际音标", link: "/phonetic.html", icon: "config" },
			{
			text: "字母及字母组合发音规律",
			link: "/字母及字母组合发音规律.md",
			icon: "circle-question",
			// 会在 `/zh/faq` 开头的路径激活
			// 所以当你前往 `/zh/faq/xxx.html` 时也会激活
			//activeMatch: "^/zh/faq",
			},
		],
	})
})
