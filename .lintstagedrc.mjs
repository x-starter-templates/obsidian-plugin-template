export default {
	"*.md": "biome format --write",
	"*.{ts,js,cjs,mjs,tsx}": ["biome check"],
};
