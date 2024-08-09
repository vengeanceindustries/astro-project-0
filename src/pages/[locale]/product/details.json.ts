import type { APIContext } from "astro";
import { getBannerDomain } from "@utils/banner.configs";

export async function GET(ctx: APIContext) {
	const bannerDomain = getBannerDomain(ctx);
	const locale = ctx.currentLocale || "en-US";
	const { url } = ctx;
	const model = url.searchParams.get("model");
	const sku = url.searchParams.get("sku");
	const baseRoute = `${bannerDomain}/zgw/product-core/v1/pdp/`;
	const route = sku
		? `${baseRoute}/sku/${sku}`
		: `${baseRoute}/model/${model}`;

	const headers: HeadersInit = { "x-api-lang": locale };
	console.log("GET /product/details.json", {
		bannerDomain,
		// requestHost,
		route,
	});
	const resp = await fetch(route, { headers }); // .then((r) => r.json());
	console.log("JSON 👉", resp);
	return resp;
	// let results;
	// let data;
	// try {
	// 	results = await resp.json();
	// 	data = JSON.stringify(results);
	// } catch (err) {
	// 	console.error("❌👉", err);
	// }

	// // if (!results) {
	// // 	return new Response(JSON.stringify(results), {
	// // 		status: 404,
	// // 		statusText: "Not found",
	// // 	});
	// // }

	// return new Response(data, {
	// 	// status: 200,
	// 	status: resp.status,
	// 	statusText: resp.statusText,
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		...(import.meta.env.DEV && { "x-banner-route": route }), // debugging
	// 	},
	// });
}

// Generated by https://quicktype.io

export interface ProductDetailsResponse {
	id: string;
	model: Model;
	style: Style;
	inventory: Inventory;
	sizes: Size[];
	styleVariants: StyleVariant[];
	sizeChart: SizeChart;
}

export interface Inventory {
	inventoryAvailable: boolean;
	storeInventoryAvailable: boolean;
	warehouseInventoryAvailable: boolean;
	dropshipInventoryAvailable: boolean | null;
	inventoryAvailableLocations: string[];
	preSell: boolean | null;
	backOrder: boolean | null;
	purchaseOrderDate: null | string;
}

export interface Model {
	id: ModelDocumentIDEnum;
	modelWebKey: string;
	companyNumber: string;
	banner: Banner;
	languageIsoCode: LanguageISOCode;
	active: boolean;
	number: number;
	name: Name;
	description: string;
	keywords: any[];
	brand: string;
	genders: string[];
	sports: string[];
	vendor: null;
	productHierarchy: ProductHierarchy;
	sizeChartId: string;
}

export type Banner = string;

export enum LanguageISOCode {
	EnUs = "en-us",
}

export type ModelDocumentIDEnum = string;
export type Name = string;
export type StyleDocumentIDEnum = string;

export interface ProductHierarchy {
	productTypes: string[];
	styles: string[];
	subStyles: string[];
}

export interface SizeChart {
	id: string;
	sizeChartGridMap: SizeChartGridMap[];
	sizeChartTipTx: string;
	sizeChartImage: string;
}

export interface SizeChartGridMap {
	label: string;
	sizes: string[];
}

export interface Size {
	id: string;
	productWebKey: string;
	styleDocumentId: StyleDocumentIDEnum;
	modelDocumentId: ModelDocumentIDEnum;
	companyNumber: string;
	banner: Banner;
	languageIsoCode: LanguageISOCode;
	active: boolean;
	productNumber: string;
	size: string;
	strippedSize: string;
	sizeVariants: null;
	upc: string;
	storeUpc: string;
	storeSku: StoreSku;
	price: Price;
	priceNet: null;
	inventory: Inventory;
}

export interface Price {
	currencyIso: null;
	listPrice: number;
	salePrice: number;
	vendorShippingPrice: number | null;
	formattedListPrice: FormattedPrice;
	formattedSalePrice: FormattedPrice;
	formattedVendorShippingPrice: FormattedVendorShippingPrice;
	priceRange: PriceRange;
	topSalesAmount: number | null;
	taxClassificationCode: null | string;
}

export type FormattedPrice = string;

export type FormattedVendorShippingPrice = string;

export type PriceRange = string;

export type StoreSku = string;

export interface Style {
	id: StyleDocumentIDEnum;
	sku: Sku;
	styleWebKey: string;
	modelWebKey: string;
	modelDocumentId: ModelDocumentIDEnum;
	companyNumber: string;
	banner: Banner;
	languageIsoCode: LanguageISOCode;
	active: boolean;
	description: string;
	color: Color;
	primaryColor: string;
	secondaryColors: string[];
	width: string;
	leagueName: string;
	playerName: string;
	teamName: string;
	fitVariant: string;
	keywords: any[];
	productDesignator: string;
	newArrivalDate: null;
	ageBuckets: any[];
	price: Price;
	priceNet: null;
	flagsAndRestrictions: { [key: string]: boolean | null };
	launchAttributes: LaunchAttributes;
	giftCardDenominations: null;
	eligiblePaymentTypes: { [key: string]: boolean | null };
	vendorAttributes: VendorAttributes;
	imageUrl: ImageURL;
}

export type Color = string;

export interface ImageURL {
	base: string;
	variants: string[];
}

export interface LaunchAttributes {
	launchProduct: boolean;
	launchType: string;
	webOnlyLaunchMsg: string;
	webOnlyLaunch: boolean;
	launchDate: null;
	launchDisplayCounterEnabled: boolean;
	launchDisplayCounterKickStartTime: null;
}

export type Sku = string;

export interface VendorAttributes {
	supplierSkus: string[];
}

export interface StyleVariant {
	active: boolean;
	styleWebKey: string;
	sku: Sku;
	upc: string;
	storeUpc: string;
	productWebKey: string;
	style: Name;
	color: Color;
	description: string;
	playerName: string;
	imageSku: string;
	size: string;
	ageBuckets: null;
	price: Price;
	priceNet: null;
	inventory: Inventory;
}
