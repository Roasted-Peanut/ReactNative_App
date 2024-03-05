import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Money: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type ActiveOrderResult = NoActiveOrderError | Order;

export type AddPaymentToOrderResult = IneligiblePaymentMethodError | NoActiveOrderError | Order | OrderPaymentStateError | OrderStateTransitionError | PaymentDeclinedError | PaymentFailedError;

export type Address = Node & {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Country;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']['output']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  type: AdjustmentType;
};

export enum AdjustmentType {
  DistributedOrderPromotion = 'DISTRIBUTED_ORDER_PROMOTION',
  Other = 'OTHER',
  Promotion = 'PROMOTION'
}

export type Admin = {
  __typename?: 'Admin';
  emailAddress: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

/** Returned when attempting to set the Customer for an Order when already logged in. */
export type AlreadyLoggedInError = ErrorResult & {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type ApplyCouponCodeResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | Order;

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  fileSize: Scalars['Int']['output'];
  focalPoint?: Maybe<Coordinate>;
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mimeType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  preview: Scalars['String']['output'];
  source: Scalars['String']['output'];
  tags: Array<Tag>;
  type: AssetType;
  updatedAt: Scalars['DateTime']['output'];
  width: Scalars['Int']['output'];
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int']['output'];
};

export enum AssetType {
  Binary = 'BINARY',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type AuthenticationInput = {
  native?: InputMaybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  strategy: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError;

export type AutoLinkOperationDefinition = {
  __typename?: 'AutoLinkOperationDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  eventTypes?: Maybe<Array<Maybe<EventType>>>;
  fields?: Maybe<Array<Maybe<Field>>>;
};

export type Benefit = Node & {
  __typename?: 'Benefit';
  benefitRanks?: Maybe<Array<Maybe<BenefitRank>>>;
  condition: ConfigurableOperation;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  position: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  translations: Array<BenefitTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  valueType?: Maybe<Scalars['String']['output']>;
};

export type BenefitFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  position?: InputMaybe<NumberOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  valueType?: InputMaybe<StringOperators>;
};

export type BenefitList = PaginatedList & {
  __typename?: 'BenefitList';
  items: Array<Benefit>;
  totalItems: Scalars['Int']['output'];
};

export type BenefitListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<BenefitFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<BenefitSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type BenefitRank = Node & {
  __typename?: 'BenefitRank';
  benefit: Benefit;
  benefitId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  rank: Rank;
  rankId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type BenefitSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  valueType?: InputMaybe<SortOrder>;
};

export type BenefitTranslation = Node & {
  __typename?: 'BenefitTranslation';
  base?: Maybe<Benefit>;
  id: Scalars['ID']['output'];
  languageCode?: Maybe<LanguageCode>;
  title: Scalars['String']['output'];
};

export type Blog = Node & {
  __typename?: 'Blog';
  assets?: Maybe<Array<Maybe<Asset>>>;
  channels: Array<Channel>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  facetValues?: Maybe<Array<Maybe<FacetValue>>>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  products?: Maybe<Array<Maybe<Product>>>;
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
  translations: Array<BlogTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type BlogFilterParameter = {
  collectionId?: InputMaybe<IdOperators>;
  content?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  facetValueId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  productIds?: InputMaybe<IdOperators>;
  startsAt?: InputMaybe<DateOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type BlogList = PaginatedList & {
  __typename?: 'BlogList';
  items: Array<Blog>;
  totalItems: Scalars['Int']['output'];
};

export type BlogListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<BlogFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<BlogSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogSortParameter = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BlogTranslation = Node & {
  __typename?: 'BlogTranslation';
  base: Blog;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  title: Scalars['ID']['output'];
};

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/** Operators for filtering on a list of Boolean fields */
export type BooleanListOperators = {
  inList: Scalars['Boolean']['input'];
};

/** Operators for filtering on a Boolean field */
export type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  availableCurrencyCodes: Array<CurrencyCode>;
  availableLanguageCodes?: Maybe<Array<LanguageCode>>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** @deprecated Use defaultCurrencyCode instead */
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  defaultCurrencyCode: CurrencyCode;
  defaultLanguageCode: LanguageCode;
  defaultShippingZone?: Maybe<Zone>;
  defaultTaxZone?: Maybe<Zone>;
  id: Scalars['ID']['output'];
  /** Not yet used - will be implemented in a future release. */
  outOfStockThreshold?: Maybe<Scalars['Int']['output']>;
  pricesIncludeTax: Scalars['Boolean']['output'];
  seller?: Maybe<Seller>;
  token: Scalars['String']['output'];
  /** Not yet used - will be implemented in a future release. */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Collection = Node & {
  __typename?: 'Collection';
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID']['output'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String']['output'];
  parent?: Maybe<Collection>;
  parentId: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  productVariants: ProductVariantList;
  slug: Scalars['String']['output'];
  translations: Array<CollectionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};


export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CollectionFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  position?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int']['output'];
};

export type CollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CollectionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
  topLevelOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int']['output'];
};

export type CollectionSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  defaultValue?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type ConfigArgInput = {
  name: Scalars['String']['input'];
  /** A JSON stringified representation of the actual value */
  value: Scalars['String']['input'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  args: Array<ConfigArg>;
  code: Scalars['String']['output'];
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type ConfigurableOperationInput = {
  arguments: Array<ConfigArgInput>;
  code: Scalars['String']['input'];
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type Country = Node & Region & {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  limit: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1: Scalars['String']['input'];
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerCustomFieldsInput = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateCustomerInput = {
  customFields?: InputMaybe<CreateCustomerCustomFieldsInput>;
  emailAddress: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byn = 'BYN',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** Swiss franc */
  Chf = 'CHF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Renminbi (Chinese) yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verde escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mru = 'MRU',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona/kronor */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Stn = 'STN',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikistani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan paʻanga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** Uruguayan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Ves = 'VES',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** CFP franc (franc Pacifique) */
  Xpf = 'XPF',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean dollar */
  Zwl = 'ZWL'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  channels: Array<CurrentUserChannel>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Permission>;
  token: Scalars['String']['output'];
};

export type CustomField = {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type CustomFieldConfig = BooleanCustomFieldConfig | DateTimeCustomFieldConfig | FloatCustomFieldConfig | IntCustomFieldConfig | LocaleStringCustomFieldConfig | LocaleTextCustomFieldConfig | RelationCustomFieldConfig | StringCustomFieldConfig | TextCustomFieldConfig;

export type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Address>>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<CustomerCustomFields>;
  emailAddress: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Rank>;
  rankId?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};


export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type CustomerCustomFields = {
  __typename?: 'CustomerCustomFields';
  avatar?: Maybe<Asset>;
  coinPoints?: Maybe<Scalars['Int']['output']>;
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  memberPoints?: Maybe<Scalars['Int']['output']>;
  unseenNoti?: Maybe<Scalars['Int']['output']>;
};

export type CustomerFilterParameter = {
  coinPoints?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  dateOfBirth?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  gender?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  lastName?: InputMaybe<StringOperators>;
  memberPoints?: InputMaybe<NumberOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  rankId?: InputMaybe<IdOperators>;
  title?: InputMaybe<StringOperators>;
  unseenNoti?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  customers: CustomerList;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int']['output'];
};

export type CustomerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerSortParameter = {
  avatar?: InputMaybe<SortOrder>;
  coinPoints?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dateOfBirth?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  memberPoints?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  rankId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  unseenNoti?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Operators for filtering on a list of Date fields */
export type DateListOperators = {
  inList: Scalars['DateTime']['input'];
};

/** Operators for filtering on a DateTime field */
export type DateOperators = {
  after?: InputMaybe<Scalars['DateTime']['input']>;
  before?: InputMaybe<Scalars['DateTime']['input']>;
  between?: InputMaybe<DateRange>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateRange = {
  end: Scalars['DateTime']['input'];
  start: Scalars['DateTime']['input'];
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['String']['output']>;
  min?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  message?: Maybe<Scalars['String']['output']>;
  result: DeletionResult;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  Deleted = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NotDeleted = 'NOT_DELETED'
}

export type DeviceToken = Node & {
  __typename?: 'DeviceToken';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  amountWithTax: Scalars['Money']['output'];
  description: Scalars['String']['output'];
  type: AdjustmentType;
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export enum ErrorCode {
  AlreadyLoggedInError = 'ALREADY_LOGGED_IN_ERROR',
  CouponCodeExpiredError = 'COUPON_CODE_EXPIRED_ERROR',
  CouponCodeInvalidError = 'COUPON_CODE_INVALID_ERROR',
  CouponCodeLimitError = 'COUPON_CODE_LIMIT_ERROR',
  EmailAddressConflictError = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  GuestCheckoutError = 'GUEST_CHECKOUT_ERROR',
  IdentifierChangeTokenExpiredError = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  IdentifierChangeTokenInvalidError = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  IneligiblePaymentMethodError = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
  IneligibleShippingMethodError = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  InsufficientStockError = 'INSUFFICIENT_STOCK_ERROR',
  InvalidCredentialsError = 'INVALID_CREDENTIALS_ERROR',
  MissingPasswordError = 'MISSING_PASSWORD_ERROR',
  NativeAuthStrategyError = 'NATIVE_AUTH_STRATEGY_ERROR',
  NegativeQuantityError = 'NEGATIVE_QUANTITY_ERROR',
  NotVerifiedError = 'NOT_VERIFIED_ERROR',
  NoActiveOrderError = 'NO_ACTIVE_ORDER_ERROR',
  OrderLimitError = 'ORDER_LIMIT_ERROR',
  OrderModificationError = 'ORDER_MODIFICATION_ERROR',
  OrderPaymentStateError = 'ORDER_PAYMENT_STATE_ERROR',
  OrderStateTransitionError = 'ORDER_STATE_TRANSITION_ERROR',
  PasswordAlreadySetError = 'PASSWORD_ALREADY_SET_ERROR',
  PasswordResetTokenExpiredError = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  PasswordResetTokenInvalidError = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PasswordValidationError = 'PASSWORD_VALIDATION_ERROR',
  PaymentDeclinedError = 'PAYMENT_DECLINED_ERROR',
  PaymentFailedError = 'PAYMENT_FAILED_ERROR',
  UnknownError = 'UNKNOWN_ERROR',
  VerificationTokenExpiredError = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  VerificationTokenInvalidError = 'VERIFICATION_TOKEN_INVALID_ERROR'
}

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type EventType = {
  __typename?: 'EventType';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ExchangePoint = Node & {
  __typename?: 'ExchangePoint';
  channelId: Scalars['ID']['output'];
  currencyCode: CurrencyCode;
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<FacetTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  /** Returns a paginated, sortable, filterable list of the Facet's values. Added in v2.1.0. */
  valueList: FacetValueList;
  values: Array<FacetValue>;
};


export type FacetValueListArgs = {
  options?: InputMaybe<FacetValueListOptions>;
};

export type FacetFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int']['output'];
};

export type FacetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type FacetSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<FacetValueCustomFields>;
  facet: Facet;
  facetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<FacetValueTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FacetValueCustomFields = {
  __typename?: 'FacetValueCustomFields';
  asset?: Maybe<Asset>;
  description?: Maybe<Scalars['String']['output']>;
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']['input']>;
  or?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type FacetValueFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  facetId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetValueList = PaginatedList & {
  __typename?: 'FacetValueList';
  items: Array<FacetValue>;
  totalItems: Scalars['Int']['output'];
};

export type FacetValueListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetValueFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetValueSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  count: Scalars['Int']['output'];
  facetValue: FacetValue;
};

export type FacetValueSortParameter = {
  asset?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  facetId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<FacetValueTranslationCustomFields>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FacetValueTranslationCustomFields = {
  __typename?: 'FacetValueTranslationCustomFields';
  description?: Maybe<Scalars['String']['output']>;
};

export type Favorite = Node & {
  __typename?: 'Favorite';
  createdAt: Scalars['DateTime']['output'];
  customer: Customer;
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FavoriteFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  customerId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  productVariantId?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FavoriteList = PaginatedList & {
  __typename?: 'FavoriteList';
  items: Array<Favorite>;
  totalItems: Scalars['Int']['output'];
};

export type FavoriteListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FavoriteFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FavoriteSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type FavoriteSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productVariantId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Field = {
  __typename?: 'Field';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  step?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lines: Array<FulfillmentLine>;
  method: Scalars['String']['output'];
  state: Scalars['String']['output'];
  /** @deprecated Use the `lines` field instead */
  summary: Array<FulfillmentLine>;
  trackingCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FulfillmentLine = {
  __typename?: 'FulfillmentLine';
  fulfillment: Fulfillment;
  fulfillmentId: Scalars['ID']['output'];
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
};

export enum GlobalFlag {
  False = 'FALSE',
  Inherit = 'INHERIT',
  True = 'TRUE'
}

/** Returned when attempting to set the Customer on a guest checkout when the configured GuestCheckoutStrategy does not allow it. */
export type GuestCheckoutError = ErrorResult & {
  __typename?: 'GuestCheckoutError';
  errorCode: ErrorCode;
  errorDetail: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime']['output'];
};

export type HistoryEntryFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int']['output'];
};

export type HistoryEntryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HistoryEntrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type HistoryEntrySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HistoryEntryType {
  CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
  CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
  CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
  CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
  CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
  CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CustomerGetCoinPoint = 'CUSTOMER_GET_COIN_POINT',
  CustomerGetMemberPoint = 'CUSTOMER_GET_MEMBER_POINT',
  CustomerNote = 'CUSTOMER_NOTE',
  CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
  CustomerRegistered = 'CUSTOMER_REGISTERED',
  CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
  CustomerUseCoinPoint = 'CUSTOMER_USE_COIN_POINT',
  CustomerVerified = 'CUSTOMER_VERIFIED',
  OrderCancellation = 'ORDER_CANCELLATION',
  OrderCouponApplied = 'ORDER_COUPON_APPLIED',
  OrderCouponRemoved = 'ORDER_COUPON_REMOVED',
  OrderFulfillment = 'ORDER_FULFILLMENT',
  OrderFulfillmentTransition = 'ORDER_FULFILLMENT_TRANSITION',
  OrderModified = 'ORDER_MODIFIED',
  OrderNote = 'ORDER_NOTE',
  OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
  OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
  OrderStateTransition = 'ORDER_STATE_TRANSITION'
}

/** Operators for filtering on a list of ID fields */
export type IdListOperators = {
  inList: Scalars['ID']['input'];
};

/** Operators for filtering on an ID field */
export type IdOperators = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Returned if the token used to change a Customer's email address is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type IdentifierChangeTokenExpiredError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned if the token used to change a Customer's email address is either
 * invalid or does not match any expected tokens.
 */
export type IdentifierChangeTokenInvalidError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to add a Payment using a PaymentMethod for which the Order is not eligible. */
export type IneligiblePaymentMethodError = ErrorResult & {
  __typename?: 'IneligiblePaymentMethodError';
  eligibilityCheckerMessage?: Maybe<Scalars['String']['output']>;
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  order: Order;
  quantityAvailable: Scalars['Int']['output'];
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  authenticationError: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  Af = 'af',
  /** Akan */
  Ak = 'ak',
  /** Amharic */
  Am = 'am',
  /** Arabic */
  Ar = 'ar',
  /** Assamese */
  As = 'as',
  /** Azerbaijani */
  Az = 'az',
  /** Belarusian */
  Be = 'be',
  /** Bulgarian */
  Bg = 'bg',
  /** Bambara */
  Bm = 'bm',
  /** Bangla */
  Bn = 'bn',
  /** Tibetan */
  Bo = 'bo',
  /** Breton */
  Br = 'br',
  /** Bosnian */
  Bs = 'bs',
  /** Catalan */
  Ca = 'ca',
  /** Chechen */
  Ce = 'ce',
  /** Corsican */
  Co = 'co',
  /** Czech */
  Cs = 'cs',
  /** Church Slavic */
  Cu = 'cu',
  /** Welsh */
  Cy = 'cy',
  /** Danish */
  Da = 'da',
  /** German */
  De = 'de',
  /** Austrian German */
  DeAt = 'de_AT',
  /** Swiss High German */
  DeCh = 'de_CH',
  /** Dzongkha */
  Dz = 'dz',
  /** Ewe */
  Ee = 'ee',
  /** Greek */
  El = 'el',
  /** English */
  En = 'en',
  /** Australian English */
  EnAu = 'en_AU',
  /** Canadian English */
  EnCa = 'en_CA',
  /** British English */
  EnGb = 'en_GB',
  /** American English */
  EnUs = 'en_US',
  /** Esperanto */
  Eo = 'eo',
  /** Spanish */
  Es = 'es',
  /** European Spanish */
  EsEs = 'es_ES',
  /** Mexican Spanish */
  EsMx = 'es_MX',
  /** Estonian */
  Et = 'et',
  /** Basque */
  Eu = 'eu',
  /** Persian */
  Fa = 'fa',
  /** Dari */
  FaAf = 'fa_AF',
  /** Fulah */
  Ff = 'ff',
  /** Finnish */
  Fi = 'fi',
  /** Faroese */
  Fo = 'fo',
  /** French */
  Fr = 'fr',
  /** Canadian French */
  FrCa = 'fr_CA',
  /** Swiss French */
  FrCh = 'fr_CH',
  /** Western Frisian */
  Fy = 'fy',
  /** Irish */
  Ga = 'ga',
  /** Scottish Gaelic */
  Gd = 'gd',
  /** Galician */
  Gl = 'gl',
  /** Gujarati */
  Gu = 'gu',
  /** Manx */
  Gv = 'gv',
  /** Hausa */
  Ha = 'ha',
  /** Hebrew */
  He = 'he',
  /** Hindi */
  Hi = 'hi',
  /** Croatian */
  Hr = 'hr',
  /** Haitian Creole */
  Ht = 'ht',
  /** Hungarian */
  Hu = 'hu',
  /** Armenian */
  Hy = 'hy',
  /** Interlingua */
  Ia = 'ia',
  /** Indonesian */
  Id = 'id',
  /** Igbo */
  Ig = 'ig',
  /** Sichuan Yi */
  Ii = 'ii',
  /** Icelandic */
  Is = 'is',
  /** Italian */
  It = 'it',
  /** Japanese */
  Ja = 'ja',
  /** Javanese */
  Jv = 'jv',
  /** Georgian */
  Ka = 'ka',
  /** Kikuyu */
  Ki = 'ki',
  /** Kazakh */
  Kk = 'kk',
  /** Kalaallisut */
  Kl = 'kl',
  /** Khmer */
  Km = 'km',
  /** Kannada */
  Kn = 'kn',
  /** Korean */
  Ko = 'ko',
  /** Kashmiri */
  Ks = 'ks',
  /** Kurdish */
  Ku = 'ku',
  /** Cornish */
  Kw = 'kw',
  /** Kyrgyz */
  Ky = 'ky',
  /** Latin */
  La = 'la',
  /** Luxembourgish */
  Lb = 'lb',
  /** Ganda */
  Lg = 'lg',
  /** Lingala */
  Ln = 'ln',
  /** Lao */
  Lo = 'lo',
  /** Lithuanian */
  Lt = 'lt',
  /** Luba-Katanga */
  Lu = 'lu',
  /** Latvian */
  Lv = 'lv',
  /** Malagasy */
  Mg = 'mg',
  /** Maori */
  Mi = 'mi',
  /** Macedonian */
  Mk = 'mk',
  /** Malayalam */
  Ml = 'ml',
  /** Mongolian */
  Mn = 'mn',
  /** Marathi */
  Mr = 'mr',
  /** Malay */
  Ms = 'ms',
  /** Maltese */
  Mt = 'mt',
  /** Burmese */
  My = 'my',
  /** Norwegian Bokmål */
  Nb = 'nb',
  /** North Ndebele */
  Nd = 'nd',
  /** Nepali */
  Ne = 'ne',
  /** Dutch */
  Nl = 'nl',
  /** Flemish */
  NlBe = 'nl_BE',
  /** Norwegian Nynorsk */
  Nn = 'nn',
  /** Nyanja */
  Ny = 'ny',
  /** Oromo */
  Om = 'om',
  /** Odia */
  Or = 'or',
  /** Ossetic */
  Os = 'os',
  /** Punjabi */
  Pa = 'pa',
  /** Polish */
  Pl = 'pl',
  /** Pashto */
  Ps = 'ps',
  /** Portuguese */
  Pt = 'pt',
  /** Brazilian Portuguese */
  PtBr = 'pt_BR',
  /** European Portuguese */
  PtPt = 'pt_PT',
  /** Quechua */
  Qu = 'qu',
  /** Romansh */
  Rm = 'rm',
  /** Rundi */
  Rn = 'rn',
  /** Romanian */
  Ro = 'ro',
  /** Moldavian */
  RoMd = 'ro_MD',
  /** Russian */
  Ru = 'ru',
  /** Kinyarwanda */
  Rw = 'rw',
  /** Sanskrit */
  Sa = 'sa',
  /** Sindhi */
  Sd = 'sd',
  /** Northern Sami */
  Se = 'se',
  /** Sango */
  Sg = 'sg',
  /** Sinhala */
  Si = 'si',
  /** Slovak */
  Sk = 'sk',
  /** Slovenian */
  Sl = 'sl',
  /** Samoan */
  Sm = 'sm',
  /** Shona */
  Sn = 'sn',
  /** Somali */
  So = 'so',
  /** Albanian */
  Sq = 'sq',
  /** Serbian */
  Sr = 'sr',
  /** Southern Sotho */
  St = 'st',
  /** Sundanese */
  Su = 'su',
  /** Swedish */
  Sv = 'sv',
  /** Swahili */
  Sw = 'sw',
  /** Congo Swahili */
  SwCd = 'sw_CD',
  /** Tamil */
  Ta = 'ta',
  /** Telugu */
  Te = 'te',
  /** Tajik */
  Tg = 'tg',
  /** Thai */
  Th = 'th',
  /** Tigrinya */
  Ti = 'ti',
  /** Turkmen */
  Tk = 'tk',
  /** Tongan */
  To = 'to',
  /** Turkish */
  Tr = 'tr',
  /** Tatar */
  Tt = 'tt',
  /** Uyghur */
  Ug = 'ug',
  /** Ukrainian */
  Uk = 'uk',
  /** Urdu */
  Ur = 'ur',
  /** Uzbek */
  Uz = 'uz',
  /** Vietnamese */
  Vi = 'vi',
  /** Volapük */
  Vo = 'vo',
  /** Wolof */
  Wo = 'wo',
  /** Xhosa */
  Xh = 'xh',
  /** Yiddish */
  Yi = 'yi',
  /** Yoruba */
  Yo = 'yo',
  /** Chinese */
  Zh = 'zh',
  /** Simplified Chinese */
  ZhHans = 'zh_Hans',
  /** Traditional Chinese */
  ZhHant = 'zh_Hant',
  /** Zulu */
  Zu = 'zu'
}

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocaleTextCustomFieldConfig = CustomField & {
  __typename?: 'LocaleTextCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String']['output'];
};

export enum LogicalOperator {
  And = 'AND',
  Or = 'OR'
}

/** Returned when attempting to register or verify a customer account without a password, when one is required. */
export type MissingPasswordError = ErrorResult & {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addDeviceToken?: Maybe<DeviceToken>;
  /** Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available. */
  addItemToOrder: UpdateOrderItemsResult;
  /** Add a Payment to the Order */
  addPaymentToOrder: AddPaymentToOrderResult;
  /** Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the active Order */
  applyCouponCode: ApplyCouponCodeResult;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  /** Create a new Customer Address */
  createCustomerAddress: Address;
  /** Delete an existing Address */
  deleteCustomerAddress: Success;
  exchangePointToVariant?: Maybe<Promotion>;
  /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
  login: NativeAuthenticationResult;
  /** End the current authenticated session */
  logout: Success;
  maskAsRead?: Maybe<Success>;
  /** Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true. */
  refreshCustomerVerification: RefreshCustomerVerificationResult;
  /**
   * Register a Customer account with the given credentials. There are three possible registration flows:
   *
   * _If `authOptions.requireVerification` is set to `true`:_
   *
   * 1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
   *    verified and authenticated in one step.
   * 2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then
   *    verified and authenticated in one step.
   *
   * _If `authOptions.requireVerification` is set to `false`:_
   *
   * 3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
   */
  registerCustomerAccount: RegisterCustomerAccountResult;
  /** Remove all OrderLine from the Order */
  removeAllOrderLines: RemoveOrderItemsResult;
  /** Removes the given coupon code from the active Order */
  removeCouponCode?: Maybe<Order>;
  /** Remove an OrderLine from the Order */
  removeOrderLine: RemoveOrderItemsResult;
  /** Requests a password reset email to be sent */
  requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  /**
   * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
   * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
   * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
   * that verification token to the Customer, which is then used to verify the change of email address.
   */
  requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
  /** Resets a Customer's password based on the provided token */
  resetPassword: ResetPasswordResult;
  /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
  setCustomerForOrder: SetCustomerForOrderResult;
  /** Sets the billing address for this order */
  setOrderBillingAddress: ActiveOrderResult;
  /** Allows any custom fields to be set for the active order */
  setOrderCustomFields: ActiveOrderResult;
  /** Sets the shipping address for this order */
  setOrderShippingAddress: ActiveOrderResult;
  /**
   * Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query.
   * An Order can have multiple shipping methods, in which case you can pass an array of ids. In this case,
   * you should configure a custom ShippingLineAssignmentStrategy in order to know which OrderLines each
   * shipping method will apply to.
   */
  setOrderShippingMethod: SetOrderShippingMethodResult;
  submitProductReview: ProductReview;
  submitQuestionAnswer: QuestionAnswer;
  toggleFavorite: Success;
  /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  /** Update an existing Customer */
  updateCustomer: Customer;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /**
   * Confirm the update of the emailAddress with the provided token, which has been generated by the
   * `requestUpdateCustomerEmailAddress` mutation.
   */
  updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
  /** Update the password of the active Customer */
  updateCustomerPassword: UpdateCustomerPasswordResult;
  /**
   * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.
   *
   * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be
   * provided here.
   */
  verifyCustomerAccount: VerifyCustomerAccountResult;
  voteOnReview: ProductReview;
};


export type MutationAddDeviceTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationAddItemToOrderArgs = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};


export type MutationAdjustOrderLineArgs = {
  orderLineId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String']['input'];
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationExchangePointToVariantArgs = {
  productVariantId: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};


export type MutationMaskAsReadArgs = {
  notificationId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String']['input'];
};


export type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};


export type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String']['input'];
};


export type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID']['input'];
};


export type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String']['input'];
};


export type MutationRequestUpdateCustomerEmailAddressArgs = {
  newEmailAddress: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};


export type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};


export type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Array<Scalars['ID']['input']>;
};


export type MutationSubmitProductReviewArgs = {
  input: SubmitProductReviewInput;
};


export type MutationSubmitQuestionAnswerArgs = {
  input: SubmitQuestionAnswerInput;
};


export type MutationToggleFavoriteArgs = {
  productVariantId: Scalars['ID']['input'];
};


export type MutationTransitionOrderToStateArgs = {
  state: Scalars['String']['input'];
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String']['input'];
};


export type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationVerifyCustomerAccountArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationVoteOnReviewArgs = {
  id: Scalars['ID']['input'];
  vote: Scalars['Boolean']['input'];
};

export type NativeAuthInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NativeAuthStrategyError | NotVerifiedError;

/** Returned when attempting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

/**
 * Returned if `authOptions.requireVerification` is set to `true` (which is the default)
 * and an unverified user attempts to authenticate.
 */
export type NotVerifiedError = ErrorResult & {
  __typename?: 'NotVerifiedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Notification = Node & {
  __typename?: 'Notification';
  body?: Maybe<Scalars['String']['output']>;
  conditions: Array<ConfigurableOperation>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  event?: Maybe<ConfigurableOperation>;
  id: Scalars['ID']['output'];
  isAuto?: Maybe<Scalars['Boolean']['output']>;
  languageCode: LanguageCode;
  link?: Maybe<ConfigurableOperation>;
  title: Scalars['String']['output'];
  translations: Array<NotificationTranslation>;
  unSeen?: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type NotificationAutoTemplate = Node & {
  __typename?: 'NotificationAutoTemplate';
  bodyTemplate?: Maybe<Scalars['String']['output']>;
  conditions: Array<ConfigurableOperation>;
  createdAt: Scalars['DateTime']['output'];
  eventType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  link?: Maybe<ConfigurableOperation>;
  titleTemplate: Scalars['String']['output'];
  translations: Array<NotificationAutoTemplateTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type NotificationAutoTemplateTranslation = {
  __typename?: 'NotificationAutoTemplateTranslation';
  bodyTemplate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languageCode: LanguageCode;
  titleTemplate: Scalars['String']['output'];
};

export type NotificationFilterParameter = {
  body?: InputMaybe<StringOperators>;
  content?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isAuto?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  unSeen?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type NotificationList = PaginatedList & {
  __typename?: 'NotificationList';
  items: Array<Notification>;
  totalItems: Scalars['Int']['output'];
};

export type NotificationListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<NotificationFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<NotificationSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type NotificationSortParameter = {
  body?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NotificationTranslation = {
  __typename?: 'NotificationTranslation';
  body?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languageCode: LanguageCode;
  title: Scalars['String']['output'];
};

/** Operators for filtering on a list of Number fields */
export type NumberListOperators = {
  inList: Scalars['Float']['input'];
};

/** Operators for filtering on a Int or Float field */
export type NumberOperators = {
  between?: InputMaybe<NumberRange>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type NumberRange = {
  end: Scalars['Float']['input'];
  start: Scalars['Float']['input'];
};

export type Order = Node & {
  __typename?: 'Order';
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean']['output'];
  billingAddress?: Maybe<OrderAddress>;
  /** A unique code for the Order */
  code: Scalars['String']['output'];
  /** An array of all coupon codes applied to the Order */
  couponCodes: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<OrderCustomFields>;
  customer?: Maybe<Customer>;
  discounts: Array<Discount>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  history: HistoryEntryList;
  id: Scalars['ID']['output'];
  lines: Array<OrderLine>;
  /**
   * The date & time that the Order was placed, i.e. the Customer
   * completed the checkout and the Order is no longer "active"
   */
  orderPlacedAt?: Maybe<Scalars['DateTime']['output']>;
  payments?: Maybe<Array<Payment>>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  shipping: Scalars['Money']['output'];
  shippingAddress?: Maybe<OrderAddress>;
  shippingLines: Array<ShippingLine>;
  shippingWithTax: Scalars['Money']['output'];
  state: Scalars['String']['output'];
  /**
   * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
   * discounts which have been prorated (proportionally distributed) amongst the items of each OrderLine.
   * To get a total of all OrderLines which does not account for prorated discounts, use the
   * sum of `OrderLine.discountedLinePrice` values.
   */
  subTotal: Scalars['Money']['output'];
  /** Same as subTotal, but inclusive of tax */
  subTotalWithTax: Scalars['Money']['output'];
  /**
   * Surcharges are arbitrary modifications to the Order total which are neither
   * ProductVariants nor discounts resulting from applied Promotions. For example,
   * one-off discounts based on customer interaction, or surcharges based on payment
   * methods.
   */
  surcharges: Array<Surcharge>;
  /** A summary of the taxes being applied to this Order */
  taxSummary: Array<OrderTaxSummary>;
  /** Equal to subTotal plus shipping */
  total: Scalars['Money']['output'];
  totalQuantity: Scalars['Int']['output'];
  /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
  totalWithTax: Scalars['Money']['output'];
  type: OrderType;
  updatedAt: Scalars['DateTime']['output'];
};


export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  streetLine1?: Maybe<Scalars['String']['output']>;
  streetLine2?: Maybe<Scalars['String']['output']>;
};

export type OrderCustomFields = {
  __typename?: 'OrderCustomFields';
  note?: Maybe<Scalars['String']['output']>;
};

export type OrderFilterParameter = {
  active?: InputMaybe<BooleanOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  note?: InputMaybe<StringOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  state?: InputMaybe<StringOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

/** Returned when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  maxItems: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  /** The price of the line including discounts, excluding tax */
  discountedLinePrice: Scalars['Money']['output'];
  /** The price of the line including discounts and tax */
  discountedLinePriceWithTax: Scalars['Money']['output'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Money']['output'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
  featuredAsset?: Maybe<Asset>;
  fulfillmentLines?: Maybe<Array<FulfillmentLine>>;
  id: Scalars['ID']['output'];
  /** The total price of the line excluding tax and discounts. */
  linePrice: Scalars['Money']['output'];
  /** The total price of the line including tax but excluding discounts. */
  linePriceWithTax: Scalars['Money']['output'];
  /** The total tax on this line */
  lineTax: Scalars['Money']['output'];
  order: Order;
  /** The quantity at the time the Order was placed */
  orderPlacedQuantity: Scalars['Int']['output'];
  productVariant: ProductVariant;
  /**
   * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
   * and refund calculations.
   */
  proratedLinePrice: Scalars['Money']['output'];
  /** The proratedLinePrice including tax */
  proratedLinePriceWithTax: Scalars['Money']['output'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Money']['output'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Money']['output'];
  /** The quantity of items purchased */
  quantity: Scalars['Int']['output'];
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float']['output'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Money']['output'];
  /** Non-zero if the unitPrice has changed since it was initially added to Order */
  unitPriceChangeSinceAdded: Scalars['Money']['output'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Money']['output'];
  /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
  unitPriceWithTaxChangeSinceAdded: Scalars['Money']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int']['output'];
};

export type OrderListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<OrderFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<OrderSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state. */
export type OrderPaymentStateError = ErrorResult & {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type OrderSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  note?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  /** A description of this tax */
  description: Scalars['String']['output'];
  /** The total net price of OrderLines to which this taxRate applies */
  taxBase: Scalars['Money']['output'];
  /** The taxRate as a percentage */
  taxRate: Scalars['Float']['output'];
  /** The total tax being applied to the Order at this taxRate */
  taxTotal: Scalars['Money']['output'];
};

export enum OrderType {
  Aggregate = 'Aggregate',
  Regular = 'Regular',
  Seller = 'Seller'
}

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int']['output'];
};

/** Returned when attempting to verify a customer account with a password, when a password has already been set. */
export type PasswordAlreadySetError = ErrorResult & {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned if the token used to reset a Customer's password is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type PasswordResetTokenExpiredError = ErrorResult & {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned if the token used to reset a Customer's password is either
 * invalid or does not match any expected tokens.
 */
export type PasswordResetTokenInvalidError = ErrorResult & {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to register or verify a customer account where the given password fails password validation. */
export type PasswordValidationError = ErrorResult & {
  __typename?: 'PasswordValidationError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  validationErrorMessage: Scalars['String']['output'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Money']['output'];
  createdAt: Scalars['DateTime']['output'];
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  method: Scalars['String']['output'];
  refunds: Array<Refund>;
  state: Scalars['String']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned when a Payment is declined by the payment provider. */
export type PaymentDeclinedError = ErrorResult & {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

/** Returned when a Payment fails due to an error. */
export type PaymentFailedError = ErrorResult & {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

/** Passed as input to the `addPaymentToOrder` mutation. */
export type PaymentInput = {
  /**
   * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
   * as the "metadata" argument. For example, it could contain an ID for the payment and other
   * data generated by the payment provider.
   */
  metadata: Scalars['JSON']['input'];
  /** This field should correspond to the `code` property of a PaymentMethod. */
  method: Scalars['String']['input'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  checker?: Maybe<ConfigurableOperation>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  handler: ConfigurableOperation;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  translations: Array<PaymentMethodTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  code: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  eligibilityMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isEligible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type PaymentMethodTranslation = {
  __typename?: 'PaymentMethodTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export enum Permission {
  /** Authenticated means simply that the user is logged in */
  Authenticated = 'Authenticated',
  /** Grants permission to create Administrator */
  CreateAdministrator = 'CreateAdministrator',
  /** Grants permission to create Asset */
  CreateAsset = 'CreateAsset',
  /** Grants permission to create Products, Facets, Assets, Collections */
  CreateCatalog = 'CreateCatalog',
  /** Grants permission to create Channel */
  CreateChannel = 'CreateChannel',
  /** Grants permission to create Collection */
  CreateCollection = 'CreateCollection',
  /** Grants permission to create Country */
  CreateCountry = 'CreateCountry',
  /** Grants permission to create Customer */
  CreateCustomer = 'CreateCustomer',
  /** Grants permission to create CustomerGroup */
  CreateCustomerGroup = 'CreateCustomerGroup',
  /** Grants permission to create Facet */
  CreateFacet = 'CreateFacet',
  /** Grants permission to create Order */
  CreateOrder = 'CreateOrder',
  /** Grants permission to create PaymentMethod */
  CreatePaymentMethod = 'CreatePaymentMethod',
  /** Grants permission to create Product */
  CreateProduct = 'CreateProduct',
  /** Grants permission to create Promotion */
  CreatePromotion = 'CreatePromotion',
  /** Grants permission to create Seller */
  CreateSeller = 'CreateSeller',
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  CreateSettings = 'CreateSettings',
  /** Grants permission to create ShippingMethod */
  CreateShippingMethod = 'CreateShippingMethod',
  /** Grants permission to create StockLocation */
  CreateStockLocation = 'CreateStockLocation',
  /** Grants permission to create System */
  CreateSystem = 'CreateSystem',
  /** Grants permission to create Tag */
  CreateTag = 'CreateTag',
  /** Grants permission to create TaxCategory */
  CreateTaxCategory = 'CreateTaxCategory',
  /** Grants permission to create TaxRate */
  CreateTaxRate = 'CreateTaxRate',
  /** Grants permission to create Zone */
  CreateZone = 'CreateZone',
  /** Grants permission to delete Administrator */
  DeleteAdministrator = 'DeleteAdministrator',
  /** Grants permission to delete Asset */
  DeleteAsset = 'DeleteAsset',
  /** Grants permission to delete Products, Facets, Assets, Collections */
  DeleteCatalog = 'DeleteCatalog',
  /** Grants permission to delete Channel */
  DeleteChannel = 'DeleteChannel',
  /** Grants permission to delete Collection */
  DeleteCollection = 'DeleteCollection',
  /** Grants permission to delete Country */
  DeleteCountry = 'DeleteCountry',
  /** Grants permission to delete Customer */
  DeleteCustomer = 'DeleteCustomer',
  /** Grants permission to delete CustomerGroup */
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  /** Grants permission to delete Facet */
  DeleteFacet = 'DeleteFacet',
  /** Grants permission to delete Order */
  DeleteOrder = 'DeleteOrder',
  /** Grants permission to delete PaymentMethod */
  DeletePaymentMethod = 'DeletePaymentMethod',
  /** Grants permission to delete Product */
  DeleteProduct = 'DeleteProduct',
  /** Grants permission to delete Promotion */
  DeletePromotion = 'DeletePromotion',
  /** Grants permission to delete Seller */
  DeleteSeller = 'DeleteSeller',
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  DeleteSettings = 'DeleteSettings',
  /** Grants permission to delete ShippingMethod */
  DeleteShippingMethod = 'DeleteShippingMethod',
  /** Grants permission to delete StockLocation */
  DeleteStockLocation = 'DeleteStockLocation',
  /** Grants permission to delete System */
  DeleteSystem = 'DeleteSystem',
  /** Grants permission to delete Tag */
  DeleteTag = 'DeleteTag',
  /** Grants permission to delete TaxCategory */
  DeleteTaxCategory = 'DeleteTaxCategory',
  /** Grants permission to delete TaxRate */
  DeleteTaxRate = 'DeleteTaxRate',
  /** Grants permission to delete Zone */
  DeleteZone = 'DeleteZone',
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /** Public means any unauthenticated user may perform the operation */
  Public = 'Public',
  /** Grants permission to read Administrator */
  ReadAdministrator = 'ReadAdministrator',
  /** Grants permission to read Asset */
  ReadAsset = 'ReadAsset',
  /** Grants permission to read Products, Facets, Assets, Collections */
  ReadCatalog = 'ReadCatalog',
  /** Grants permission to read Channel */
  ReadChannel = 'ReadChannel',
  /** Grants permission to read Collection */
  ReadCollection = 'ReadCollection',
  /** Grants permission to read Country */
  ReadCountry = 'ReadCountry',
  /** Grants permission to read Customer */
  ReadCustomer = 'ReadCustomer',
  /** Grants permission to read CustomerGroup */
  ReadCustomerGroup = 'ReadCustomerGroup',
  /** Grants permission to read Facet */
  ReadFacet = 'ReadFacet',
  /** Grants permission to read Order */
  ReadOrder = 'ReadOrder',
  /** Grants permission to read PaymentMethod */
  ReadPaymentMethod = 'ReadPaymentMethod',
  /** Grants permission to read Product */
  ReadProduct = 'ReadProduct',
  /** Grants permission to read Promotion */
  ReadPromotion = 'ReadPromotion',
  /** Grants permission to read Seller */
  ReadSeller = 'ReadSeller',
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  ReadSettings = 'ReadSettings',
  /** Grants permission to read ShippingMethod */
  ReadShippingMethod = 'ReadShippingMethod',
  /** Grants permission to read StockLocation */
  ReadStockLocation = 'ReadStockLocation',
  /** Grants permission to read System */
  ReadSystem = 'ReadSystem',
  /** Grants permission to read Tag */
  ReadTag = 'ReadTag',
  /** Grants permission to read TaxCategory */
  ReadTaxCategory = 'ReadTaxCategory',
  /** Grants permission to read TaxRate */
  ReadTaxRate = 'ReadTaxRate',
  /** Grants permission to read Zone */
  ReadZone = 'ReadZone',
  /** SuperAdmin has unrestricted access to all operations */
  SuperAdmin = 'SuperAdmin',
  /** Grants permission to update Administrator */
  UpdateAdministrator = 'UpdateAdministrator',
  /** Grants permission to update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Grants permission to update Products, Facets, Assets, Collections */
  UpdateCatalog = 'UpdateCatalog',
  /** Grants permission to update Channel */
  UpdateChannel = 'UpdateChannel',
  /** Grants permission to update Collection */
  UpdateCollection = 'UpdateCollection',
  /** Grants permission to update Country */
  UpdateCountry = 'UpdateCountry',
  /** Grants permission to update Customer */
  UpdateCustomer = 'UpdateCustomer',
  /** Grants permission to update CustomerGroup */
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  /** Grants permission to update Facet */
  UpdateFacet = 'UpdateFacet',
  /** Grants permission to update GlobalSettings */
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  /** Grants permission to update Order */
  UpdateOrder = 'UpdateOrder',
  /** Grants permission to update PaymentMethod */
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  /** Grants permission to update Product */
  UpdateProduct = 'UpdateProduct',
  /** Grants permission to update Promotion */
  UpdatePromotion = 'UpdatePromotion',
  /** Grants permission to update Seller */
  UpdateSeller = 'UpdateSeller',
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  UpdateSettings = 'UpdateSettings',
  /** Grants permission to update ShippingMethod */
  UpdateShippingMethod = 'UpdateShippingMethod',
  /** Grants permission to update StockLocation */
  UpdateStockLocation = 'UpdateStockLocation',
  /** Grants permission to update System */
  UpdateSystem = 'UpdateSystem',
  /** Grants permission to update Tag */
  UpdateTag = 'UpdateTag',
  /** Grants permission to update TaxCategory */
  UpdateTaxCategory = 'UpdateTaxCategory',
  /** Grants permission to update TaxRate */
  UpdateTaxRate = 'UpdateTaxRate',
  /** Grants permission to update Zone */
  UpdateZone = 'UpdateZone'
}

/** The price range where the result has more than one price */
export type PriceRange = {
  __typename?: 'PriceRange';
  max: Scalars['Money']['output'];
  min: Scalars['Money']['output'];
};

export type Product = Node & {
  __typename?: 'Product';
  assets: Array<Asset>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  optionGroups: Array<ProductOptionGroup>;
  reviewCount: Scalars['Int']['output'];
  reviewRating?: Maybe<Scalars['Int']['output']>;
  reviews: ProductReviewList;
  reviewsHistogram: Array<ProductReviewHistogramItem>;
  slug: Scalars['String']['output'];
  translations: Array<ProductTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  /** Returns a paginated, sortable, filterable list of ProductVariants */
  variantList: ProductVariantList;
  /** Returns all ProductVariants */
  variants: Array<ProductVariant>;
};


export type ProductReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
};


export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  reviewCount?: InputMaybe<NumberOperators>;
  reviewRating?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int']['output'];
};

export type ProductListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  group: ProductOptionGroup;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<ProductOptionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductReview = Node & {
  __typename?: 'ProductReview';
  authorLocation?: Maybe<Scalars['String']['output']>;
  authorName: Scalars['String']['output'];
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  downvotes: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  productVariant?: Maybe<ProductVariant>;
  rating: Scalars['Float']['output'];
  response?: Maybe<Scalars['String']['output']>;
  responseCreatedAt?: Maybe<Scalars['DateTime']['output']>;
  state: Scalars['String']['output'];
  summary: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  upvotes: Scalars['Int']['output'];
};

export type ProductReviewFilterParameter = {
  authorLocation?: InputMaybe<StringOperators>;
  authorName?: InputMaybe<StringOperators>;
  body?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  downvotes?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  rating?: InputMaybe<NumberOperators>;
  response?: InputMaybe<StringOperators>;
  responseCreatedAt?: InputMaybe<DateOperators>;
  state?: InputMaybe<StringOperators>;
  summary?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  upvotes?: InputMaybe<NumberOperators>;
};

export type ProductReviewHistogramItem = {
  __typename?: 'ProductReviewHistogramItem';
  bin: Scalars['Int']['output'];
  frequency: Scalars['Int']['output'];
};

export type ProductReviewList = PaginatedList & {
  __typename?: 'ProductReviewList';
  items: Array<ProductReview>;
  totalItems: Scalars['Int']['output'];
};

export type ProductReviewListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductReviewFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductReviewSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductReviewSortParameter = {
  authorLocation?: InputMaybe<SortOrder>;
  authorName?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  downvotes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  response?: InputMaybe<SortOrder>;
  responseCreatedAt?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  summary?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  upvotes?: InputMaybe<SortOrder>;
};

export type ProductSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  reviewCount?: InputMaybe<SortOrder>;
  reviewRating?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  assets: Array<Asset>;
  createdAt: Scalars['DateTime']['output'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<ProductVariantCustomFields>;
  discountAmount?: Maybe<Scalars['Float']['output']>;
  discountPercent?: Maybe<Scalars['Float']['output']>;
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  product: Product;
  productId: Scalars['ID']['output'];
  sku: Scalars['String']['output'];
  stockLevel: Scalars['String']['output'];
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariantCustomFields = {
  __typename?: 'ProductVariantCustomFields';
  barcode?: Maybe<Scalars['String']['output']>;
  rrp?: Maybe<Scalars['Int']['output']>;
};

export type ProductVariantFilterParameter = {
  barcode?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  discountAmount?: InputMaybe<NumberOperators>;
  discountPercent?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  price?: InputMaybe<NumberOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  productId?: InputMaybe<IdOperators>;
  rrp?: InputMaybe<NumberOperators>;
  sku?: InputMaybe<StringOperators>;
  stockLevel?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int']['output'];
};

export type ProductVariantListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductVariantFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductVariantSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductVariantPoint = Node & {
  __typename?: 'ProductVariantPoint';
  channelId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  point: Scalars['Int']['output'];
  variant?: Maybe<ProductVariant>;
  variantId: Scalars['ID']['output'];
};

export type ProductVariantSortParameter = {
  barcode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  discountAmount?: InputMaybe<SortOrder>;
  discountPercent?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  rrp?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  actions: Array<ConfigurableOperation>;
  conditions: Array<ConfigurableOperation>;
  couponCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  perCustomerUsageLimit?: Maybe<Scalars['Int']['output']>;
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  translations: Array<PromotionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  usageLimit?: Maybe<Scalars['Int']['output']>;
};

export type PromotionFilterParameter = {
  couponCode?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  endsAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  perCustomerUsageLimit?: InputMaybe<NumberOperators>;
  startsAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  usageLimit?: InputMaybe<NumberOperators>;
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int']['output'];
};

export type PromotionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PromotionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PromotionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PromotionSortParameter = {
  couponCode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  perCustomerUsageLimit?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  usageLimit?: InputMaybe<SortOrder>;
};

export type PromotionTranslation = {
  __typename?: 'PromotionTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Province = Node & Region & {
  __typename?: 'Province';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProvinceList = PaginatedList & {
  __typename?: 'ProvinceList';
  items: Array<Province>;
  totalItems: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** The active Channel */
  activeChannel: Channel;
  /** The active Customer */
  activeCustomer?: Maybe<Customer>;
  /**
   * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
   * state of `PaymentAuthorized` or `PaymentSettled`, then that Order is no longer considered "active" and this
   * query will once again return `null`.
   */
  activeOrder?: Maybe<Order>;
  /** An array of supported Countries */
  availableCountries: Array<Country>;
  benefit?: Maybe<Benefit>;
  benefitConditions: Array<ConfigurableOperationDefinition>;
  benefitPromotions?: Maybe<PromotionList>;
  benefits: BenefitList;
  blog?: Maybe<Blog>;
  blogs: BlogList;
  /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  collection?: Maybe<Collection>;
  /** A list of Collections available to the shop */
  collections: CollectionList;
  countFavorite?: Maybe<Total>;
  /** Returns a list of payment methods and their eligibility based on the current active Order */
  eligiblePaymentMethods: Array<PaymentMethodQuote>;
  /** Returns a list of eligible shipping methods based on the current active Order */
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  exchangePoints: Array<ExchangePoint>;
  /** Returns a Facet by its id */
  facet?: Maybe<Facet>;
  /** A list of Facets available to the shop */
  facets: FacetList;
  favorites: FavoriteList;
  /** Returns information about the current authenticated User */
  me?: Maybe<CurrentUser>;
  /** Returns the possible next states that the activeOrder can transition to */
  nextOrderStates: Array<Scalars['String']['output']>;
  notification?: Maybe<Notification>;
  notifications: NotificationList;
  /**
   * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
   * currently-authenticated User may be queried.
   */
  order?: Maybe<Order>;
  /**
   * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
   * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
   * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
   * general anonymous access to Order data.
   */
  orderByCode?: Maybe<Order>;
  /** Get a Product either by id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  product?: Maybe<Product>;
  productVariantPoints: Array<ProductVariantPoint>;
  /** Get a list of Products */
  products: ProductList;
  questionAnswer?: Maybe<QuestionAnswer>;
  questionAnswers: QuestionAnswerList;
  rank?: Maybe<Rank>;
  ranks: RankList;
  /** Search Products based on the criteria set by the `SearchInput` */
  search: SearchResponse;
};


export type QueryBenefitArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBenefitPromotionsArgs = {
  options?: InputMaybe<PromotionListOptions>;
};


export type QueryBenefitsArgs = {
  options?: InputMaybe<BenefitListOptions>;
};


export type QueryBlogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBlogsArgs = {
  options?: InputMaybe<BlogListOptions>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};


export type QueryCountFavoriteArgs = {
  productVariantId: Scalars['ID']['input'];
};


export type QueryFacetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};


export type QueryFavoritesArgs = {
  options?: InputMaybe<FavoriteListOptions>;
};


export type QueryNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationsArgs = {
  options?: InputMaybe<NotificationListOptions>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderByCodeArgs = {
  code: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};


export type QueryQuestionAnswerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuestionAnswersArgs = {
  options?: InputMaybe<QuestionAnswerListOptions>;
};


export type QueryRankArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRanksArgs = {
  options?: InputMaybe<RankListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};

export type QuestionAnswer = Node & {
  __typename?: 'QuestionAnswer';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['ID']['output']>;
  answers?: Maybe<Array<Maybe<QuestionAnswer>>>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['ID']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  productVariantId: Scalars['ID']['output'];
  replied?: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type QuestionAnswerFilterParameter = {
  adminId?: InputMaybe<IdOperators>;
  body?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  customerId?: InputMaybe<IdOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  productVariantId?: InputMaybe<IdOperators>;
  replied?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type QuestionAnswerList = PaginatedList & {
  __typename?: 'QuestionAnswerList';
  items: Array<QuestionAnswer>;
  totalItems: Scalars['Int']['output'];
};

export type QuestionAnswerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<QuestionAnswerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  productVariantId?: InputMaybe<Scalars['ID']['input']>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<QuestionAnswerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type QuestionAnswerSortParameter = {
  adminId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productVariantId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Rank = Node & {
  __typename?: 'Rank';
  assets?: Maybe<Array<Maybe<Asset>>>;
  channels: Array<Channel>;
  createdAt: Scalars['DateTime']['output'];
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  requiredPoint: Scalars['Int']['output'];
  translations: Array<RankTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RankFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  requiredPoint?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type RankList = PaginatedList & {
  __typename?: 'RankList';
  items: Array<Rank>;
  totalItems: Scalars['Int']['output'];
};

export type RankListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<RankFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<RankSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type RankSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  requiredPoint?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RankTranslation = Node & {
  __typename?: 'RankTranslation';
  base: Rank;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
};

export type RefreshCustomerVerificationResult = NativeAuthStrategyError | Success;

export type Refund = Node & {
  __typename?: 'Refund';
  adjustment: Scalars['Money']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items: Scalars['Money']['output'];
  lines: Array<RefundLine>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  paymentId: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  shipping: Scalars['Money']['output'];
  state: Scalars['String']['output'];
  total: Scalars['Money']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RefundLine = {
  __typename?: 'RefundLine';
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  refund: Refund;
  refundId: Scalars['ID']['output'];
};

export type Region = {
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RegionTranslation = {
  __typename?: 'RegionTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RegisterCustomerAccountResult = MissingPasswordError | NativeAuthStrategyError | PasswordValidationError | Success;

export type RegisterCustomerCustomFieldsInput = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
};

export type RegisterCustomerInput = {
  customFields?: InputMaybe<RegisterCustomerCustomFieldsInput>;
  emailAddress: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  entity: Scalars['String']['output'];
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  scalarFields: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RequestPasswordResetResult = NativeAuthStrategyError | Success;

export type RequestUpdateCustomerEmailAddressResult = EmailAddressConflictError | InvalidCredentialsError | NativeAuthStrategyError | Success;

export type ResetPasswordResult = CurrentUser | NativeAuthStrategyError | NotVerifiedError | PasswordResetTokenExpiredError | PasswordResetTokenInvalidError | PasswordValidationError;

export type Role = Node & {
  __typename?: 'Role';
  channels: Array<Channel>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int']['output'];
};

export type SearchInput = {
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  collectionSlug?: InputMaybe<Scalars['String']['input']>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  groupByProduct?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SearchResultSortParameter>;
  take?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean']['output'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  collections: Array<CollectionResult>;
  facetValues: Array<FacetValueResult>;
  items: Array<SearchResult>;
  totalItems: Scalars['Int']['output'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']['output']>;
  currencyCode: CurrencyCode;
  description: Scalars['String']['output'];
  facetIds: Array<Scalars['ID']['output']>;
  facetValueIds: Array<Scalars['ID']['output']>;
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  productAsset?: Maybe<SearchResultAsset>;
  productId: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID']['output'];
  productVariantName: Scalars['String']['output'];
  /** A relevance score for the result. Differs between database implementations */
  score: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  focalPoint?: Maybe<Coordinate>;
  id: Scalars['ID']['output'];
  preview: Scalars['String']['output'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type Seller = Node & {
  __typename?: 'Seller';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SetCustomerForOrderResult = AlreadyLoggedInError | EmailAddressConflictError | GuestCheckoutError | NoActiveOrderError | Order;

export type SetOrderShippingMethodResult = IneligibleShippingMethodError | NoActiveOrderError | Order | OrderModificationError;

export type ShippingLine = {
  __typename?: 'ShippingLine';
  discountedPrice: Scalars['Money']['output'];
  discountedPriceWithTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  shippingMethod: ShippingMethod;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  calculator: ConfigurableOperation;
  checker: ConfigurableOperation;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  fulfillmentHandlerCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<ShippingMethodTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int']['output'];
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  code: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Money']['output'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  label?: Maybe<Array<LocalizedString>>;
  value: Scalars['String']['output'];
};

/** Operators for filtering on a list of String fields */
export type StringListOperators = {
  inList: Scalars['String']['input'];
};

/** Operators for filtering on a String field */
export type StringOperators = {
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type SubmitProductReviewInput = {
  authorLocation?: InputMaybe<Scalars['String']['input']>;
  authorName: Scalars['String']['input'];
  body: Scalars['String']['input'];
  customerId?: InputMaybe<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
  rating: Scalars['Float']['input'];
  summary: Scalars['String']['input'];
  variantId?: InputMaybe<Scalars['ID']['input']>;
};

export type SubmitQuestionAnswerInput = {
  body: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean']['output'];
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int']['output'];
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String']['output'];
  taxRate: Scalars['Float']['output'];
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  category: TaxCategory;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  customerGroup?: Maybe<CustomerGroup>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
  zone: Zone;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int']['output'];
};

export type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type Total = {
  __typename?: 'Total';
  total: Scalars['Int']['output'];
};

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1?: InputMaybe<Scalars['String']['input']>;
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerCustomFieldsInput = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCustomerEmailAddressResult = IdentifierChangeTokenExpiredError | IdentifierChangeTokenInvalidError | NativeAuthStrategyError | Success;

export type UpdateCustomerInput = {
  customFields?: InputMaybe<UpdateCustomerCustomFieldsInput>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerPasswordResult = InvalidCredentialsError | NativeAuthStrategyError | PasswordValidationError | Success;

export type UpdateOrderCustomFieldsInput = {
  note?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderInput = {
  customFields?: InputMaybe<UpdateOrderCustomFieldsInput>;
};

export type UpdateOrderItemsResult = InsufficientStockError | NegativeQuantityError | Order | OrderLimitError | OrderModificationError;

export type User = Node & {
  __typename?: 'User';
  authenticationMethods: Array<AuthenticationMethod>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export type VerificationTokenExpiredError = ErrorResult & {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned if the verification token (used to verify a Customer's email address) is either
 * invalid or does not match any expected tokens.
 */
export type VerificationTokenInvalidError = ErrorResult & {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type VerifyCustomerAccountResult = CurrentUser | MissingPasswordError | NativeAuthStrategyError | PasswordAlreadySetError | PasswordValidationError | VerificationTokenExpiredError | VerificationTokenInvalidError;

export type Zone = Node & {
  __typename?: 'Zone';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  members: Array<Region>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GetProductListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductListQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, slug: string, description: string } | null };

export type DetailFragment = { __typename?: 'Product', slug: string, description: string };

export const DetailFragmentDoc = gql`
    fragment Detail on Product {
  slug
  description
}
    `;
export const GetProductListDocument = gql`
    query GetProductList {
  product(id: 1) {
    id
    name
    ...Detail
  }
}
    ${DetailFragmentDoc}`;

/**
 * __useGetProductListQuery__
 *
 * To run a query within a React component, call `useGetProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductListQuery(baseOptions?: Apollo.QueryHookOptions<GetProductListQuery, GetProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductListQuery, GetProductListQueryVariables>(GetProductListDocument, options);
      }
export function useGetProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductListQuery, GetProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductListQuery, GetProductListQueryVariables>(GetProductListDocument, options);
        }
export function useGetProductListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProductListQuery, GetProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProductListQuery, GetProductListQueryVariables>(GetProductListDocument, options);
        }
export type GetProductListQueryHookResult = ReturnType<typeof useGetProductListQuery>;
export type GetProductListLazyQueryHookResult = ReturnType<typeof useGetProductListLazyQuery>;
export type GetProductListSuspenseQueryHookResult = ReturnType<typeof useGetProductListSuspenseQuery>;
export type GetProductListQueryResult = Apollo.QueryResult<GetProductListQuery, GetProductListQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  ActiveOrderResult: ( NoActiveOrderError ) | ( Order );
  AddPaymentToOrderResult: ( IneligiblePaymentMethodError ) | ( NoActiveOrderError ) | ( Order ) | ( OrderPaymentStateError ) | ( OrderStateTransitionError ) | ( PaymentDeclinedError ) | ( PaymentFailedError );
  ApplyCouponCodeResult: ( CouponCodeExpiredError ) | ( CouponCodeInvalidError ) | ( CouponCodeLimitError ) | ( Order );
  AuthenticationResult: ( CurrentUser ) | ( InvalidCredentialsError ) | ( NotVerifiedError );
  CustomFieldConfig: ( BooleanCustomFieldConfig ) | ( DateTimeCustomFieldConfig ) | ( FloatCustomFieldConfig ) | ( IntCustomFieldConfig ) | ( LocaleStringCustomFieldConfig ) | ( LocaleTextCustomFieldConfig ) | ( RelationCustomFieldConfig ) | ( StringCustomFieldConfig ) | ( TextCustomFieldConfig );
  NativeAuthenticationResult: ( CurrentUser ) | ( InvalidCredentialsError ) | ( NativeAuthStrategyError ) | ( NotVerifiedError );
  RefreshCustomerVerificationResult: ( NativeAuthStrategyError ) | ( Success );
  RegisterCustomerAccountResult: ( MissingPasswordError ) | ( NativeAuthStrategyError ) | ( PasswordValidationError ) | ( Success );
  RemoveOrderItemsResult: ( Order ) | ( OrderModificationError );
  RequestPasswordResetResult: ( NativeAuthStrategyError ) | ( Success );
  RequestUpdateCustomerEmailAddressResult: ( EmailAddressConflictError ) | ( InvalidCredentialsError ) | ( NativeAuthStrategyError ) | ( Success );
  ResetPasswordResult: ( CurrentUser ) | ( NativeAuthStrategyError ) | ( NotVerifiedError ) | ( PasswordResetTokenExpiredError ) | ( PasswordResetTokenInvalidError ) | ( PasswordValidationError );
  SearchResultPrice: ( PriceRange ) | ( SinglePrice );
  SetCustomerForOrderResult: ( AlreadyLoggedInError ) | ( EmailAddressConflictError ) | ( GuestCheckoutError ) | ( NoActiveOrderError ) | ( Order );
  SetOrderShippingMethodResult: ( IneligibleShippingMethodError ) | ( NoActiveOrderError ) | ( Order ) | ( OrderModificationError );
  TransitionOrderToStateResult: ( Order ) | ( OrderStateTransitionError );
  UpdateCustomerEmailAddressResult: ( IdentifierChangeTokenExpiredError ) | ( IdentifierChangeTokenInvalidError ) | ( NativeAuthStrategyError ) | ( Success );
  UpdateCustomerPasswordResult: ( InvalidCredentialsError ) | ( NativeAuthStrategyError ) | ( PasswordValidationError ) | ( Success );
  UpdateOrderItemsResult: ( InsufficientStockError ) | ( NegativeQuantityError ) | ( Order ) | ( OrderLimitError ) | ( OrderModificationError );
  VerifyCustomerAccountResult: ( CurrentUser ) | ( MissingPasswordError ) | ( NativeAuthStrategyError ) | ( PasswordAlreadySetError ) | ( PasswordValidationError ) | ( VerificationTokenExpiredError ) | ( VerificationTokenInvalidError );
};

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  CustomField: ( BooleanCustomFieldConfig ) | ( DateTimeCustomFieldConfig ) | ( FloatCustomFieldConfig ) | ( IntCustomFieldConfig ) | ( LocaleStringCustomFieldConfig ) | ( LocaleTextCustomFieldConfig ) | ( RelationCustomFieldConfig ) | ( StringCustomFieldConfig ) | ( TextCustomFieldConfig );
  ErrorResult: ( AlreadyLoggedInError ) | ( CouponCodeExpiredError ) | ( CouponCodeInvalidError ) | ( CouponCodeLimitError ) | ( EmailAddressConflictError ) | ( GuestCheckoutError ) | ( IdentifierChangeTokenExpiredError ) | ( IdentifierChangeTokenInvalidError ) | ( IneligiblePaymentMethodError ) | ( IneligibleShippingMethodError ) | ( InsufficientStockError ) | ( InvalidCredentialsError ) | ( MissingPasswordError ) | ( NativeAuthStrategyError ) | ( NegativeQuantityError ) | ( NoActiveOrderError ) | ( NotVerifiedError ) | ( OrderLimitError ) | ( OrderModificationError ) | ( OrderPaymentStateError ) | ( OrderStateTransitionError ) | ( PasswordAlreadySetError ) | ( PasswordResetTokenExpiredError ) | ( PasswordResetTokenInvalidError ) | ( PasswordValidationError ) | ( PaymentDeclinedError ) | ( PaymentFailedError ) | ( VerificationTokenExpiredError ) | ( VerificationTokenInvalidError );
  Node: ( Address ) | ( Asset ) | ( AuthenticationMethod ) | ( Benefit ) | ( BenefitRank ) | ( BenefitTranslation ) | ( Blog ) | ( BlogTranslation ) | ( Channel ) | ( Collection ) | ( Country ) | ( Customer ) | ( CustomerGroup ) | ( DeviceToken ) | ( ExchangePoint ) | ( Facet ) | ( FacetValue ) | ( Favorite ) | ( Fulfillment ) | ( HistoryEntry ) | ( Notification ) | ( NotificationAutoTemplate ) | ( Order ) | ( OrderLine ) | ( Payment ) | ( PaymentMethod ) | ( Product ) | ( ProductOption ) | ( ProductOptionGroup ) | ( ProductReview ) | ( ProductVariant ) | ( ProductVariantPoint ) | ( Promotion ) | ( Province ) | ( QuestionAnswer ) | ( Rank ) | ( RankTranslation ) | ( Refund ) | ( Role ) | ( Seller ) | ( ShippingMethod ) | ( Surcharge ) | ( Tag ) | ( TaxCategory ) | ( TaxRate ) | ( User ) | ( Zone );
  PaginatedList: ( AssetList ) | ( BenefitList ) | ( BlogList ) | ( CollectionList ) | ( CountryList ) | ( CustomerList ) | ( FacetList ) | ( FacetValueList ) | ( FavoriteList ) | ( HistoryEntryList ) | ( NotificationList ) | ( OrderList ) | ( ProductList ) | ( ProductReviewList ) | ( ProductVariantList ) | ( PromotionList ) | ( ProvinceList ) | ( QuestionAnswerList ) | ( RankList ) | ( RoleList ) | ( ShippingMethodList ) | ( TagList ) | ( TaxRateList );
  Region: ( Country ) | ( Province );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ActiveOrderResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ActiveOrderResult']>;
  AddPaymentToOrderResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AddPaymentToOrderResult']>;
  Address: ResolverTypeWrapper<Address>;
  Adjustment: ResolverTypeWrapper<Adjustment>;
  AdjustmentType: AdjustmentType;
  Admin: ResolverTypeWrapper<Admin>;
  AlreadyLoggedInError: ResolverTypeWrapper<AlreadyLoggedInError>;
  ApplyCouponCodeResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ApplyCouponCodeResult']>;
  Asset: ResolverTypeWrapper<Asset>;
  AssetList: ResolverTypeWrapper<AssetList>;
  AssetType: AssetType;
  AuthenticationInput: AuthenticationInput;
  AuthenticationMethod: ResolverTypeWrapper<AuthenticationMethod>;
  AuthenticationResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['AuthenticationResult']>;
  AutoLinkOperationDefinition: ResolverTypeWrapper<AutoLinkOperationDefinition>;
  Benefit: ResolverTypeWrapper<Benefit>;
  BenefitFilterParameter: BenefitFilterParameter;
  BenefitList: ResolverTypeWrapper<BenefitList>;
  BenefitListOptions: BenefitListOptions;
  BenefitRank: ResolverTypeWrapper<BenefitRank>;
  BenefitSortParameter: BenefitSortParameter;
  BenefitTranslation: ResolverTypeWrapper<BenefitTranslation>;
  Blog: ResolverTypeWrapper<Blog>;
  BlogFilterParameter: BlogFilterParameter;
  BlogList: ResolverTypeWrapper<BlogList>;
  BlogListOptions: BlogListOptions;
  BlogSortParameter: BlogSortParameter;
  BlogTranslation: ResolverTypeWrapper<BlogTranslation>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanCustomFieldConfig: ResolverTypeWrapper<BooleanCustomFieldConfig>;
  BooleanListOperators: BooleanListOperators;
  BooleanOperators: BooleanOperators;
  Channel: ResolverTypeWrapper<Channel>;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionBreadcrumb: ResolverTypeWrapper<CollectionBreadcrumb>;
  CollectionFilterParameter: CollectionFilterParameter;
  CollectionList: ResolverTypeWrapper<CollectionList>;
  CollectionListOptions: CollectionListOptions;
  CollectionResult: ResolverTypeWrapper<CollectionResult>;
  CollectionSortParameter: CollectionSortParameter;
  CollectionTranslation: ResolverTypeWrapper<CollectionTranslation>;
  ConfigArg: ResolverTypeWrapper<ConfigArg>;
  ConfigArgDefinition: ResolverTypeWrapper<ConfigArgDefinition>;
  ConfigArgInput: ConfigArgInput;
  ConfigurableOperation: ResolverTypeWrapper<ConfigurableOperation>;
  ConfigurableOperationDefinition: ResolverTypeWrapper<ConfigurableOperationDefinition>;
  ConfigurableOperationInput: ConfigurableOperationInput;
  Coordinate: ResolverTypeWrapper<Coordinate>;
  Country: ResolverTypeWrapper<Country>;
  CountryList: ResolverTypeWrapper<CountryList>;
  CouponCodeExpiredError: ResolverTypeWrapper<CouponCodeExpiredError>;
  CouponCodeInvalidError: ResolverTypeWrapper<CouponCodeInvalidError>;
  CouponCodeLimitError: ResolverTypeWrapper<CouponCodeLimitError>;
  CreateAddressInput: CreateAddressInput;
  CreateCustomerCustomFieldsInput: CreateCustomerCustomFieldsInput;
  CreateCustomerInput: CreateCustomerInput;
  CurrencyCode: CurrencyCode;
  CurrentUser: ResolverTypeWrapper<CurrentUser>;
  CurrentUserChannel: ResolverTypeWrapper<CurrentUserChannel>;
  CustomField: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['CustomField']>;
  CustomFieldConfig: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['CustomFieldConfig']>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerCustomFields: ResolverTypeWrapper<CustomerCustomFields>;
  CustomerFilterParameter: CustomerFilterParameter;
  CustomerGroup: ResolverTypeWrapper<CustomerGroup>;
  CustomerList: ResolverTypeWrapper<CustomerList>;
  CustomerListOptions: CustomerListOptions;
  CustomerSortParameter: CustomerSortParameter;
  DateListOperators: DateListOperators;
  DateOperators: DateOperators;
  DateRange: DateRange;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeCustomFieldConfig: ResolverTypeWrapper<DateTimeCustomFieldConfig>;
  DeletionResponse: ResolverTypeWrapper<DeletionResponse>;
  DeletionResult: DeletionResult;
  DeviceToken: ResolverTypeWrapper<DeviceToken>;
  Discount: ResolverTypeWrapper<Discount>;
  EmailAddressConflictError: ResolverTypeWrapper<EmailAddressConflictError>;
  ErrorCode: ErrorCode;
  ErrorResult: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ErrorResult']>;
  EventType: ResolverTypeWrapper<EventType>;
  ExchangePoint: ResolverTypeWrapper<ExchangePoint>;
  Facet: ResolverTypeWrapper<Facet>;
  FacetFilterParameter: FacetFilterParameter;
  FacetList: ResolverTypeWrapper<FacetList>;
  FacetListOptions: FacetListOptions;
  FacetSortParameter: FacetSortParameter;
  FacetTranslation: ResolverTypeWrapper<FacetTranslation>;
  FacetValue: ResolverTypeWrapper<FacetValue>;
  FacetValueCustomFields: ResolverTypeWrapper<FacetValueCustomFields>;
  FacetValueFilterInput: FacetValueFilterInput;
  FacetValueFilterParameter: FacetValueFilterParameter;
  FacetValueList: ResolverTypeWrapper<FacetValueList>;
  FacetValueListOptions: FacetValueListOptions;
  FacetValueResult: ResolverTypeWrapper<FacetValueResult>;
  FacetValueSortParameter: FacetValueSortParameter;
  FacetValueTranslation: ResolverTypeWrapper<FacetValueTranslation>;
  FacetValueTranslationCustomFields: ResolverTypeWrapper<FacetValueTranslationCustomFields>;
  Favorite: ResolverTypeWrapper<Favorite>;
  FavoriteFilterParameter: FavoriteFilterParameter;
  FavoriteList: ResolverTypeWrapper<FavoriteList>;
  FavoriteListOptions: FavoriteListOptions;
  FavoriteSortParameter: FavoriteSortParameter;
  Field: ResolverTypeWrapper<Field>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatCustomFieldConfig: ResolverTypeWrapper<FloatCustomFieldConfig>;
  Fulfillment: ResolverTypeWrapper<Fulfillment>;
  FulfillmentLine: ResolverTypeWrapper<FulfillmentLine>;
  GlobalFlag: GlobalFlag;
  GuestCheckoutError: ResolverTypeWrapper<GuestCheckoutError>;
  HistoryEntry: ResolverTypeWrapper<HistoryEntry>;
  HistoryEntryFilterParameter: HistoryEntryFilterParameter;
  HistoryEntryList: ResolverTypeWrapper<HistoryEntryList>;
  HistoryEntryListOptions: HistoryEntryListOptions;
  HistoryEntrySortParameter: HistoryEntrySortParameter;
  HistoryEntryType: HistoryEntryType;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDListOperators: IdListOperators;
  IDOperators: IdOperators;
  IdentifierChangeTokenExpiredError: ResolverTypeWrapper<IdentifierChangeTokenExpiredError>;
  IdentifierChangeTokenInvalidError: ResolverTypeWrapper<IdentifierChangeTokenInvalidError>;
  IneligiblePaymentMethodError: ResolverTypeWrapper<IneligiblePaymentMethodError>;
  IneligibleShippingMethodError: ResolverTypeWrapper<IneligibleShippingMethodError>;
  InsufficientStockError: ResolverTypeWrapper<InsufficientStockError>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IntCustomFieldConfig: ResolverTypeWrapper<IntCustomFieldConfig>;
  InvalidCredentialsError: ResolverTypeWrapper<InvalidCredentialsError>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  LanguageCode: LanguageCode;
  LocaleStringCustomFieldConfig: ResolverTypeWrapper<LocaleStringCustomFieldConfig>;
  LocaleTextCustomFieldConfig: ResolverTypeWrapper<LocaleTextCustomFieldConfig>;
  LocalizedString: ResolverTypeWrapper<LocalizedString>;
  LogicalOperator: LogicalOperator;
  MissingPasswordError: ResolverTypeWrapper<MissingPasswordError>;
  Money: ResolverTypeWrapper<Scalars['Money']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  NativeAuthInput: NativeAuthInput;
  NativeAuthStrategyError: ResolverTypeWrapper<NativeAuthStrategyError>;
  NativeAuthenticationResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['NativeAuthenticationResult']>;
  NegativeQuantityError: ResolverTypeWrapper<NegativeQuantityError>;
  NoActiveOrderError: ResolverTypeWrapper<NoActiveOrderError>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  NotVerifiedError: ResolverTypeWrapper<NotVerifiedError>;
  Notification: ResolverTypeWrapper<Notification>;
  NotificationAutoTemplate: ResolverTypeWrapper<NotificationAutoTemplate>;
  NotificationAutoTemplateTranslation: ResolverTypeWrapper<NotificationAutoTemplateTranslation>;
  NotificationFilterParameter: NotificationFilterParameter;
  NotificationList: ResolverTypeWrapper<NotificationList>;
  NotificationListOptions: NotificationListOptions;
  NotificationSortParameter: NotificationSortParameter;
  NotificationTranslation: ResolverTypeWrapper<NotificationTranslation>;
  NumberListOperators: NumberListOperators;
  NumberOperators: NumberOperators;
  NumberRange: NumberRange;
  Order: ResolverTypeWrapper<Order>;
  OrderAddress: ResolverTypeWrapper<OrderAddress>;
  OrderCustomFields: ResolverTypeWrapper<OrderCustomFields>;
  OrderFilterParameter: OrderFilterParameter;
  OrderLimitError: ResolverTypeWrapper<OrderLimitError>;
  OrderLine: ResolverTypeWrapper<OrderLine>;
  OrderList: ResolverTypeWrapper<OrderList>;
  OrderListOptions: OrderListOptions;
  OrderModificationError: ResolverTypeWrapper<OrderModificationError>;
  OrderPaymentStateError: ResolverTypeWrapper<OrderPaymentStateError>;
  OrderSortParameter: OrderSortParameter;
  OrderStateTransitionError: ResolverTypeWrapper<OrderStateTransitionError>;
  OrderTaxSummary: ResolverTypeWrapper<OrderTaxSummary>;
  OrderType: OrderType;
  PaginatedList: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['PaginatedList']>;
  PasswordAlreadySetError: ResolverTypeWrapper<PasswordAlreadySetError>;
  PasswordResetTokenExpiredError: ResolverTypeWrapper<PasswordResetTokenExpiredError>;
  PasswordResetTokenInvalidError: ResolverTypeWrapper<PasswordResetTokenInvalidError>;
  PasswordValidationError: ResolverTypeWrapper<PasswordValidationError>;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentDeclinedError: ResolverTypeWrapper<PaymentDeclinedError>;
  PaymentFailedError: ResolverTypeWrapper<PaymentFailedError>;
  PaymentInput: PaymentInput;
  PaymentMethod: ResolverTypeWrapper<PaymentMethod>;
  PaymentMethodQuote: ResolverTypeWrapper<PaymentMethodQuote>;
  PaymentMethodTranslation: ResolverTypeWrapper<PaymentMethodTranslation>;
  Permission: Permission;
  PriceRange: ResolverTypeWrapper<PriceRange>;
  Product: ResolverTypeWrapper<Product>;
  ProductFilterParameter: ProductFilterParameter;
  ProductList: ResolverTypeWrapper<ProductList>;
  ProductListOptions: ProductListOptions;
  ProductOption: ResolverTypeWrapper<ProductOption>;
  ProductOptionGroup: ResolverTypeWrapper<ProductOptionGroup>;
  ProductOptionGroupTranslation: ResolverTypeWrapper<ProductOptionGroupTranslation>;
  ProductOptionTranslation: ResolverTypeWrapper<ProductOptionTranslation>;
  ProductReview: ResolverTypeWrapper<ProductReview>;
  ProductReviewFilterParameter: ProductReviewFilterParameter;
  ProductReviewHistogramItem: ResolverTypeWrapper<ProductReviewHistogramItem>;
  ProductReviewList: ResolverTypeWrapper<ProductReviewList>;
  ProductReviewListOptions: ProductReviewListOptions;
  ProductReviewSortParameter: ProductReviewSortParameter;
  ProductSortParameter: ProductSortParameter;
  ProductTranslation: ResolverTypeWrapper<ProductTranslation>;
  ProductVariant: ResolverTypeWrapper<ProductVariant>;
  ProductVariantCustomFields: ResolverTypeWrapper<ProductVariantCustomFields>;
  ProductVariantFilterParameter: ProductVariantFilterParameter;
  ProductVariantList: ResolverTypeWrapper<ProductVariantList>;
  ProductVariantListOptions: ProductVariantListOptions;
  ProductVariantPoint: ResolverTypeWrapper<ProductVariantPoint>;
  ProductVariantSortParameter: ProductVariantSortParameter;
  ProductVariantTranslation: ResolverTypeWrapper<ProductVariantTranslation>;
  Promotion: ResolverTypeWrapper<Promotion>;
  PromotionFilterParameter: PromotionFilterParameter;
  PromotionList: ResolverTypeWrapper<PromotionList>;
  PromotionListOptions: PromotionListOptions;
  PromotionSortParameter: PromotionSortParameter;
  PromotionTranslation: ResolverTypeWrapper<PromotionTranslation>;
  Province: ResolverTypeWrapper<Province>;
  ProvinceList: ResolverTypeWrapper<ProvinceList>;
  Query: ResolverTypeWrapper<{}>;
  QuestionAnswer: ResolverTypeWrapper<QuestionAnswer>;
  QuestionAnswerFilterParameter: QuestionAnswerFilterParameter;
  QuestionAnswerList: ResolverTypeWrapper<QuestionAnswerList>;
  QuestionAnswerListOptions: QuestionAnswerListOptions;
  QuestionAnswerSortParameter: QuestionAnswerSortParameter;
  Rank: ResolverTypeWrapper<Rank>;
  RankFilterParameter: RankFilterParameter;
  RankList: ResolverTypeWrapper<RankList>;
  RankListOptions: RankListOptions;
  RankSortParameter: RankSortParameter;
  RankTranslation: ResolverTypeWrapper<RankTranslation>;
  RefreshCustomerVerificationResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RefreshCustomerVerificationResult']>;
  Refund: ResolverTypeWrapper<Refund>;
  RefundLine: ResolverTypeWrapper<RefundLine>;
  Region: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Region']>;
  RegionTranslation: ResolverTypeWrapper<RegionTranslation>;
  RegisterCustomerAccountResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RegisterCustomerAccountResult']>;
  RegisterCustomerCustomFieldsInput: RegisterCustomerCustomFieldsInput;
  RegisterCustomerInput: RegisterCustomerInput;
  RelationCustomFieldConfig: ResolverTypeWrapper<RelationCustomFieldConfig>;
  RemoveOrderItemsResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RemoveOrderItemsResult']>;
  RequestPasswordResetResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RequestPasswordResetResult']>;
  RequestUpdateCustomerEmailAddressResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['RequestUpdateCustomerEmailAddressResult']>;
  ResetPasswordResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ResetPasswordResult']>;
  Role: ResolverTypeWrapper<Role>;
  RoleList: ResolverTypeWrapper<RoleList>;
  SearchInput: SearchInput;
  SearchReindexResponse: ResolverTypeWrapper<SearchReindexResponse>;
  SearchResponse: ResolverTypeWrapper<SearchResponse>;
  SearchResult: ResolverTypeWrapper<Omit<SearchResult, 'price' | 'priceWithTax'> & { price: ResolversTypes['SearchResultPrice'], priceWithTax: ResolversTypes['SearchResultPrice'] }>;
  SearchResultAsset: ResolverTypeWrapper<SearchResultAsset>;
  SearchResultPrice: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SearchResultPrice']>;
  SearchResultSortParameter: SearchResultSortParameter;
  Seller: ResolverTypeWrapper<Seller>;
  SetCustomerForOrderResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SetCustomerForOrderResult']>;
  SetOrderShippingMethodResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SetOrderShippingMethodResult']>;
  ShippingLine: ResolverTypeWrapper<ShippingLine>;
  ShippingMethod: ResolverTypeWrapper<ShippingMethod>;
  ShippingMethodList: ResolverTypeWrapper<ShippingMethodList>;
  ShippingMethodQuote: ResolverTypeWrapper<ShippingMethodQuote>;
  ShippingMethodTranslation: ResolverTypeWrapper<ShippingMethodTranslation>;
  SinglePrice: ResolverTypeWrapper<SinglePrice>;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringCustomFieldConfig: ResolverTypeWrapper<StringCustomFieldConfig>;
  StringFieldOption: ResolverTypeWrapper<StringFieldOption>;
  StringListOperators: StringListOperators;
  StringOperators: StringOperators;
  SubmitProductReviewInput: SubmitProductReviewInput;
  SubmitQuestionAnswerInput: SubmitQuestionAnswerInput;
  Success: ResolverTypeWrapper<Success>;
  Surcharge: ResolverTypeWrapper<Surcharge>;
  Tag: ResolverTypeWrapper<Tag>;
  TagList: ResolverTypeWrapper<TagList>;
  TaxCategory: ResolverTypeWrapper<TaxCategory>;
  TaxLine: ResolverTypeWrapper<TaxLine>;
  TaxRate: ResolverTypeWrapper<TaxRate>;
  TaxRateList: ResolverTypeWrapper<TaxRateList>;
  TextCustomFieldConfig: ResolverTypeWrapper<TextCustomFieldConfig>;
  Total: ResolverTypeWrapper<Total>;
  TransitionOrderToStateResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['TransitionOrderToStateResult']>;
  UpdateAddressInput: UpdateAddressInput;
  UpdateCustomerCustomFieldsInput: UpdateCustomerCustomFieldsInput;
  UpdateCustomerEmailAddressResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UpdateCustomerEmailAddressResult']>;
  UpdateCustomerInput: UpdateCustomerInput;
  UpdateCustomerPasswordResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UpdateCustomerPasswordResult']>;
  UpdateOrderCustomFieldsInput: UpdateOrderCustomFieldsInput;
  UpdateOrderInput: UpdateOrderInput;
  UpdateOrderItemsResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UpdateOrderItemsResult']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<User>;
  VerificationTokenExpiredError: ResolverTypeWrapper<VerificationTokenExpiredError>;
  VerificationTokenInvalidError: ResolverTypeWrapper<VerificationTokenInvalidError>;
  VerifyCustomerAccountResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['VerifyCustomerAccountResult']>;
  Zone: ResolverTypeWrapper<Zone>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ActiveOrderResult: ResolversUnionTypes<ResolversParentTypes>['ActiveOrderResult'];
  AddPaymentToOrderResult: ResolversUnionTypes<ResolversParentTypes>['AddPaymentToOrderResult'];
  Address: Address;
  Adjustment: Adjustment;
  Admin: Admin;
  AlreadyLoggedInError: AlreadyLoggedInError;
  ApplyCouponCodeResult: ResolversUnionTypes<ResolversParentTypes>['ApplyCouponCodeResult'];
  Asset: Asset;
  AssetList: AssetList;
  AuthenticationInput: AuthenticationInput;
  AuthenticationMethod: AuthenticationMethod;
  AuthenticationResult: ResolversUnionTypes<ResolversParentTypes>['AuthenticationResult'];
  AutoLinkOperationDefinition: AutoLinkOperationDefinition;
  Benefit: Benefit;
  BenefitFilterParameter: BenefitFilterParameter;
  BenefitList: BenefitList;
  BenefitListOptions: BenefitListOptions;
  BenefitRank: BenefitRank;
  BenefitSortParameter: BenefitSortParameter;
  BenefitTranslation: BenefitTranslation;
  Blog: Blog;
  BlogFilterParameter: BlogFilterParameter;
  BlogList: BlogList;
  BlogListOptions: BlogListOptions;
  BlogSortParameter: BlogSortParameter;
  BlogTranslation: BlogTranslation;
  Boolean: Scalars['Boolean']['output'];
  BooleanCustomFieldConfig: BooleanCustomFieldConfig;
  BooleanListOperators: BooleanListOperators;
  BooleanOperators: BooleanOperators;
  Channel: Channel;
  Collection: Collection;
  CollectionBreadcrumb: CollectionBreadcrumb;
  CollectionFilterParameter: CollectionFilterParameter;
  CollectionList: CollectionList;
  CollectionListOptions: CollectionListOptions;
  CollectionResult: CollectionResult;
  CollectionSortParameter: CollectionSortParameter;
  CollectionTranslation: CollectionTranslation;
  ConfigArg: ConfigArg;
  ConfigArgDefinition: ConfigArgDefinition;
  ConfigArgInput: ConfigArgInput;
  ConfigurableOperation: ConfigurableOperation;
  ConfigurableOperationDefinition: ConfigurableOperationDefinition;
  ConfigurableOperationInput: ConfigurableOperationInput;
  Coordinate: Coordinate;
  Country: Country;
  CountryList: CountryList;
  CouponCodeExpiredError: CouponCodeExpiredError;
  CouponCodeInvalidError: CouponCodeInvalidError;
  CouponCodeLimitError: CouponCodeLimitError;
  CreateAddressInput: CreateAddressInput;
  CreateCustomerCustomFieldsInput: CreateCustomerCustomFieldsInput;
  CreateCustomerInput: CreateCustomerInput;
  CurrentUser: CurrentUser;
  CurrentUserChannel: CurrentUserChannel;
  CustomField: ResolversInterfaceTypes<ResolversParentTypes>['CustomField'];
  CustomFieldConfig: ResolversUnionTypes<ResolversParentTypes>['CustomFieldConfig'];
  Customer: Customer;
  CustomerCustomFields: CustomerCustomFields;
  CustomerFilterParameter: CustomerFilterParameter;
  CustomerGroup: CustomerGroup;
  CustomerList: CustomerList;
  CustomerListOptions: CustomerListOptions;
  CustomerSortParameter: CustomerSortParameter;
  DateListOperators: DateListOperators;
  DateOperators: DateOperators;
  DateRange: DateRange;
  DateTime: Scalars['DateTime']['output'];
  DateTimeCustomFieldConfig: DateTimeCustomFieldConfig;
  DeletionResponse: DeletionResponse;
  DeviceToken: DeviceToken;
  Discount: Discount;
  EmailAddressConflictError: EmailAddressConflictError;
  ErrorResult: ResolversInterfaceTypes<ResolversParentTypes>['ErrorResult'];
  EventType: EventType;
  ExchangePoint: ExchangePoint;
  Facet: Facet;
  FacetFilterParameter: FacetFilterParameter;
  FacetList: FacetList;
  FacetListOptions: FacetListOptions;
  FacetSortParameter: FacetSortParameter;
  FacetTranslation: FacetTranslation;
  FacetValue: FacetValue;
  FacetValueCustomFields: FacetValueCustomFields;
  FacetValueFilterInput: FacetValueFilterInput;
  FacetValueFilterParameter: FacetValueFilterParameter;
  FacetValueList: FacetValueList;
  FacetValueListOptions: FacetValueListOptions;
  FacetValueResult: FacetValueResult;
  FacetValueSortParameter: FacetValueSortParameter;
  FacetValueTranslation: FacetValueTranslation;
  FacetValueTranslationCustomFields: FacetValueTranslationCustomFields;
  Favorite: Favorite;
  FavoriteFilterParameter: FavoriteFilterParameter;
  FavoriteList: FavoriteList;
  FavoriteListOptions: FavoriteListOptions;
  FavoriteSortParameter: FavoriteSortParameter;
  Field: Field;
  Float: Scalars['Float']['output'];
  FloatCustomFieldConfig: FloatCustomFieldConfig;
  Fulfillment: Fulfillment;
  FulfillmentLine: FulfillmentLine;
  GuestCheckoutError: GuestCheckoutError;
  HistoryEntry: HistoryEntry;
  HistoryEntryFilterParameter: HistoryEntryFilterParameter;
  HistoryEntryList: HistoryEntryList;
  HistoryEntryListOptions: HistoryEntryListOptions;
  HistoryEntrySortParameter: HistoryEntrySortParameter;
  ID: Scalars['ID']['output'];
  IDListOperators: IdListOperators;
  IDOperators: IdOperators;
  IdentifierChangeTokenExpiredError: IdentifierChangeTokenExpiredError;
  IdentifierChangeTokenInvalidError: IdentifierChangeTokenInvalidError;
  IneligiblePaymentMethodError: IneligiblePaymentMethodError;
  IneligibleShippingMethodError: IneligibleShippingMethodError;
  InsufficientStockError: InsufficientStockError;
  Int: Scalars['Int']['output'];
  IntCustomFieldConfig: IntCustomFieldConfig;
  InvalidCredentialsError: InvalidCredentialsError;
  JSON: Scalars['JSON']['output'];
  LocaleStringCustomFieldConfig: LocaleStringCustomFieldConfig;
  LocaleTextCustomFieldConfig: LocaleTextCustomFieldConfig;
  LocalizedString: LocalizedString;
  MissingPasswordError: MissingPasswordError;
  Money: Scalars['Money']['output'];
  Mutation: {};
  NativeAuthInput: NativeAuthInput;
  NativeAuthStrategyError: NativeAuthStrategyError;
  NativeAuthenticationResult: ResolversUnionTypes<ResolversParentTypes>['NativeAuthenticationResult'];
  NegativeQuantityError: NegativeQuantityError;
  NoActiveOrderError: NoActiveOrderError;
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  NotVerifiedError: NotVerifiedError;
  Notification: Notification;
  NotificationAutoTemplate: NotificationAutoTemplate;
  NotificationAutoTemplateTranslation: NotificationAutoTemplateTranslation;
  NotificationFilterParameter: NotificationFilterParameter;
  NotificationList: NotificationList;
  NotificationListOptions: NotificationListOptions;
  NotificationSortParameter: NotificationSortParameter;
  NotificationTranslation: NotificationTranslation;
  NumberListOperators: NumberListOperators;
  NumberOperators: NumberOperators;
  NumberRange: NumberRange;
  Order: Order;
  OrderAddress: OrderAddress;
  OrderCustomFields: OrderCustomFields;
  OrderFilterParameter: OrderFilterParameter;
  OrderLimitError: OrderLimitError;
  OrderLine: OrderLine;
  OrderList: OrderList;
  OrderListOptions: OrderListOptions;
  OrderModificationError: OrderModificationError;
  OrderPaymentStateError: OrderPaymentStateError;
  OrderSortParameter: OrderSortParameter;
  OrderStateTransitionError: OrderStateTransitionError;
  OrderTaxSummary: OrderTaxSummary;
  PaginatedList: ResolversInterfaceTypes<ResolversParentTypes>['PaginatedList'];
  PasswordAlreadySetError: PasswordAlreadySetError;
  PasswordResetTokenExpiredError: PasswordResetTokenExpiredError;
  PasswordResetTokenInvalidError: PasswordResetTokenInvalidError;
  PasswordValidationError: PasswordValidationError;
  Payment: Payment;
  PaymentDeclinedError: PaymentDeclinedError;
  PaymentFailedError: PaymentFailedError;
  PaymentInput: PaymentInput;
  PaymentMethod: PaymentMethod;
  PaymentMethodQuote: PaymentMethodQuote;
  PaymentMethodTranslation: PaymentMethodTranslation;
  PriceRange: PriceRange;
  Product: Product;
  ProductFilterParameter: ProductFilterParameter;
  ProductList: ProductList;
  ProductListOptions: ProductListOptions;
  ProductOption: ProductOption;
  ProductOptionGroup: ProductOptionGroup;
  ProductOptionGroupTranslation: ProductOptionGroupTranslation;
  ProductOptionTranslation: ProductOptionTranslation;
  ProductReview: ProductReview;
  ProductReviewFilterParameter: ProductReviewFilterParameter;
  ProductReviewHistogramItem: ProductReviewHistogramItem;
  ProductReviewList: ProductReviewList;
  ProductReviewListOptions: ProductReviewListOptions;
  ProductReviewSortParameter: ProductReviewSortParameter;
  ProductSortParameter: ProductSortParameter;
  ProductTranslation: ProductTranslation;
  ProductVariant: ProductVariant;
  ProductVariantCustomFields: ProductVariantCustomFields;
  ProductVariantFilterParameter: ProductVariantFilterParameter;
  ProductVariantList: ProductVariantList;
  ProductVariantListOptions: ProductVariantListOptions;
  ProductVariantPoint: ProductVariantPoint;
  ProductVariantSortParameter: ProductVariantSortParameter;
  ProductVariantTranslation: ProductVariantTranslation;
  Promotion: Promotion;
  PromotionFilterParameter: PromotionFilterParameter;
  PromotionList: PromotionList;
  PromotionListOptions: PromotionListOptions;
  PromotionSortParameter: PromotionSortParameter;
  PromotionTranslation: PromotionTranslation;
  Province: Province;
  ProvinceList: ProvinceList;
  Query: {};
  QuestionAnswer: QuestionAnswer;
  QuestionAnswerFilterParameter: QuestionAnswerFilterParameter;
  QuestionAnswerList: QuestionAnswerList;
  QuestionAnswerListOptions: QuestionAnswerListOptions;
  QuestionAnswerSortParameter: QuestionAnswerSortParameter;
  Rank: Rank;
  RankFilterParameter: RankFilterParameter;
  RankList: RankList;
  RankListOptions: RankListOptions;
  RankSortParameter: RankSortParameter;
  RankTranslation: RankTranslation;
  RefreshCustomerVerificationResult: ResolversUnionTypes<ResolversParentTypes>['RefreshCustomerVerificationResult'];
  Refund: Refund;
  RefundLine: RefundLine;
  Region: ResolversInterfaceTypes<ResolversParentTypes>['Region'];
  RegionTranslation: RegionTranslation;
  RegisterCustomerAccountResult: ResolversUnionTypes<ResolversParentTypes>['RegisterCustomerAccountResult'];
  RegisterCustomerCustomFieldsInput: RegisterCustomerCustomFieldsInput;
  RegisterCustomerInput: RegisterCustomerInput;
  RelationCustomFieldConfig: RelationCustomFieldConfig;
  RemoveOrderItemsResult: ResolversUnionTypes<ResolversParentTypes>['RemoveOrderItemsResult'];
  RequestPasswordResetResult: ResolversUnionTypes<ResolversParentTypes>['RequestPasswordResetResult'];
  RequestUpdateCustomerEmailAddressResult: ResolversUnionTypes<ResolversParentTypes>['RequestUpdateCustomerEmailAddressResult'];
  ResetPasswordResult: ResolversUnionTypes<ResolversParentTypes>['ResetPasswordResult'];
  Role: Role;
  RoleList: RoleList;
  SearchInput: SearchInput;
  SearchReindexResponse: SearchReindexResponse;
  SearchResponse: SearchResponse;
  SearchResult: Omit<SearchResult, 'price' | 'priceWithTax'> & { price: ResolversParentTypes['SearchResultPrice'], priceWithTax: ResolversParentTypes['SearchResultPrice'] };
  SearchResultAsset: SearchResultAsset;
  SearchResultPrice: ResolversUnionTypes<ResolversParentTypes>['SearchResultPrice'];
  SearchResultSortParameter: SearchResultSortParameter;
  Seller: Seller;
  SetCustomerForOrderResult: ResolversUnionTypes<ResolversParentTypes>['SetCustomerForOrderResult'];
  SetOrderShippingMethodResult: ResolversUnionTypes<ResolversParentTypes>['SetOrderShippingMethodResult'];
  ShippingLine: ShippingLine;
  ShippingMethod: ShippingMethod;
  ShippingMethodList: ShippingMethodList;
  ShippingMethodQuote: ShippingMethodQuote;
  ShippingMethodTranslation: ShippingMethodTranslation;
  SinglePrice: SinglePrice;
  String: Scalars['String']['output'];
  StringCustomFieldConfig: StringCustomFieldConfig;
  StringFieldOption: StringFieldOption;
  StringListOperators: StringListOperators;
  StringOperators: StringOperators;
  SubmitProductReviewInput: SubmitProductReviewInput;
  SubmitQuestionAnswerInput: SubmitQuestionAnswerInput;
  Success: Success;
  Surcharge: Surcharge;
  Tag: Tag;
  TagList: TagList;
  TaxCategory: TaxCategory;
  TaxLine: TaxLine;
  TaxRate: TaxRate;
  TaxRateList: TaxRateList;
  TextCustomFieldConfig: TextCustomFieldConfig;
  Total: Total;
  TransitionOrderToStateResult: ResolversUnionTypes<ResolversParentTypes>['TransitionOrderToStateResult'];
  UpdateAddressInput: UpdateAddressInput;
  UpdateCustomerCustomFieldsInput: UpdateCustomerCustomFieldsInput;
  UpdateCustomerEmailAddressResult: ResolversUnionTypes<ResolversParentTypes>['UpdateCustomerEmailAddressResult'];
  UpdateCustomerInput: UpdateCustomerInput;
  UpdateCustomerPasswordResult: ResolversUnionTypes<ResolversParentTypes>['UpdateCustomerPasswordResult'];
  UpdateOrderCustomFieldsInput: UpdateOrderCustomFieldsInput;
  UpdateOrderInput: UpdateOrderInput;
  UpdateOrderItemsResult: ResolversUnionTypes<ResolversParentTypes>['UpdateOrderItemsResult'];
  Upload: Scalars['Upload']['output'];
  User: User;
  VerificationTokenExpiredError: VerificationTokenExpiredError;
  VerificationTokenInvalidError: VerificationTokenInvalidError;
  VerifyCustomerAccountResult: ResolversUnionTypes<ResolversParentTypes>['VerifyCustomerAccountResult'];
  Zone: Zone;
};

export type ActiveOrderResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActiveOrderResult'] = ResolversParentTypes['ActiveOrderResult']> = {
  __resolveType: TypeResolveFn<'NoActiveOrderError' | 'Order', ParentType, ContextType>;
};

export type AddPaymentToOrderResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddPaymentToOrderResult'] = ResolversParentTypes['AddPaymentToOrderResult']> = {
  __resolveType: TypeResolveFn<'IneligiblePaymentMethodError' | 'NoActiveOrderError' | 'Order' | 'OrderPaymentStateError' | 'OrderStateTransitionError' | 'PaymentDeclinedError' | 'PaymentFailedError', ParentType, ContextType>;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  defaultBillingAddress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  defaultShippingAddress?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdjustmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Adjustment'] = ResolversParentTypes['Adjustment']> = {
  adjustmentSource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AdjustmentType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminResolvers<ContextType = any, ParentType extends ResolversParentTypes['Admin'] = ResolversParentTypes['Admin']> = {
  emailAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlreadyLoggedInErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlreadyLoggedInError'] = ResolversParentTypes['AlreadyLoggedInError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplyCouponCodeResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApplyCouponCodeResult'] = ResolversParentTypes['ApplyCouponCodeResult']> = {
  __resolveType: TypeResolveFn<'CouponCodeExpiredError' | 'CouponCodeInvalidError' | 'CouponCodeLimitError' | 'Order', ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fileSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  focalPoint?: Resolver<Maybe<ResolversTypes['Coordinate']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AssetType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetList'] = ResolversParentTypes['AssetList']> = {
  items?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticationMethod'] = ResolversParentTypes['AuthenticationMethod']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  strategy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticationResult'] = ResolversParentTypes['AuthenticationResult']> = {
  __resolveType: TypeResolveFn<'CurrentUser' | 'InvalidCredentialsError' | 'NotVerifiedError', ParentType, ContextType>;
};

export type AutoLinkOperationDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AutoLinkOperationDefinition'] = ResolversParentTypes['AutoLinkOperationDefinition']> = {
  args?: Resolver<Array<ResolversTypes['ConfigArgDefinition']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['EventType']>>>, ParentType, ContextType>;
  fields?: Resolver<Maybe<Array<Maybe<ResolversTypes['Field']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BenefitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Benefit'] = ResolversParentTypes['Benefit']> = {
  benefitRanks?: Resolver<Maybe<Array<Maybe<ResolversTypes['BenefitRank']>>>, ParentType, ContextType>;
  condition?: Resolver<ResolversTypes['ConfigurableOperation'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['BenefitTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  valueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BenefitListResolvers<ContextType = any, ParentType extends ResolversParentTypes['BenefitList'] = ResolversParentTypes['BenefitList']> = {
  items?: Resolver<Array<ResolversTypes['Benefit']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BenefitRankResolvers<ContextType = any, ParentType extends ResolversParentTypes['BenefitRank'] = ResolversParentTypes['BenefitRank']> = {
  benefit?: Resolver<ResolversTypes['Benefit'], ParentType, ContextType>;
  benefitId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Rank'], ParentType, ContextType>;
  rankId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BenefitTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['BenefitTranslation'] = ResolversParentTypes['BenefitTranslation']> = {
  base?: Resolver<Maybe<ResolversTypes['Benefit']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<Maybe<ResolversTypes['LanguageCode']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = {
  assets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Asset']>>>, ParentType, ContextType>;
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  facetValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['FacetValue']>>>, ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  startsAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['BlogTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogListResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogList'] = ResolversParentTypes['BlogList']> = {
  items?: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogTranslation'] = ResolversParentTypes['BlogTranslation']> = {
  base?: Resolver<ResolversTypes['Blog'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BooleanCustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['BooleanCustomFieldConfig'] = ResolversParentTypes['BooleanCustomFieldConfig']> = {
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Channel'] = ResolversParentTypes['Channel']> = {
  availableCurrencyCodes?: Resolver<Array<ResolversTypes['CurrencyCode']>, ParentType, ContextType>;
  availableLanguageCodes?: Resolver<Maybe<Array<ResolversTypes['LanguageCode']>>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  defaultCurrencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  defaultLanguageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  defaultShippingZone?: Resolver<Maybe<ResolversTypes['Zone']>, ParentType, ContextType>;
  defaultTaxZone?: Resolver<Maybe<ResolversTypes['Zone']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  outOfStockThreshold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pricesIncludeTax?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seller?: Resolver<Maybe<ResolversTypes['Seller']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trackInventory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  breadcrumbs?: Resolver<Array<ResolversTypes['CollectionBreadcrumb']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<ResolversTypes['Collection']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  filters?: Resolver<Array<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<Maybe<ResolversTypes['LanguageCode']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productVariants?: Resolver<ResolversTypes['ProductVariantList'], ParentType, ContextType, Partial<CollectionProductVariantsArgs>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['CollectionTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionBreadcrumbResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionBreadcrumb'] = ResolversParentTypes['CollectionBreadcrumb']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionList'] = ResolversParentTypes['CollectionList']> = {
  items?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionResult'] = ResolversParentTypes['CollectionResult']> = {
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionTranslation'] = ResolversParentTypes['CollectionTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigArgResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigArg'] = ResolversParentTypes['ConfigArg']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigArgDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigArgDefinition'] = ResolversParentTypes['ConfigArgDefinition']> = {
  defaultValue?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableOperation'] = ResolversParentTypes['ConfigurableOperation']> = {
  args?: Resolver<Array<ResolversTypes['ConfigArg']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigurableOperationDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConfigurableOperationDefinition'] = ResolversParentTypes['ConfigurableOperationDefinition']> = {
  args?: Resolver<Array<ResolversTypes['ConfigArgDefinition']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoordinateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coordinate'] = ResolversParentTypes['Coordinate']> = {
  x?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['RegionTranslation']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountryList'] = ResolversParentTypes['CountryList']> = {
  items?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouponCodeExpiredErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CouponCodeExpiredError'] = ResolversParentTypes['CouponCodeExpiredError']> = {
  couponCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouponCodeInvalidErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CouponCodeInvalidError'] = ResolversParentTypes['CouponCodeInvalidError']> = {
  couponCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CouponCodeLimitErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CouponCodeLimitError'] = ResolversParentTypes['CouponCodeLimitError']> = {
  couponCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentUser'] = ResolversParentTypes['CurrentUser']> = {
  channels?: Resolver<Array<ResolversTypes['CurrentUserChannel']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrentUserChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentUserChannel'] = ResolversParentTypes['CurrentUserChannel']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['Permission']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomFieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomField'] = ResolversParentTypes['CustomField']> = {
  __resolveType: TypeResolveFn<'BooleanCustomFieldConfig' | 'DateTimeCustomFieldConfig' | 'FloatCustomFieldConfig' | 'IntCustomFieldConfig' | 'LocaleStringCustomFieldConfig' | 'LocaleTextCustomFieldConfig' | 'RelationCustomFieldConfig' | 'StringCustomFieldConfig' | 'TextCustomFieldConfig', ParentType, ContextType>;
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
};

export type CustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomFieldConfig'] = ResolversParentTypes['CustomFieldConfig']> = {
  __resolveType: TypeResolveFn<'BooleanCustomFieldConfig' | 'DateTimeCustomFieldConfig' | 'FloatCustomFieldConfig' | 'IntCustomFieldConfig' | 'LocaleStringCustomFieldConfig' | 'LocaleTextCustomFieldConfig' | 'RelationCustomFieldConfig' | 'StringCustomFieldConfig' | 'TextCustomFieldConfig', ParentType, ContextType>;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  addresses?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['CustomerCustomFields']>, ParentType, ContextType>;
  emailAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<ResolversTypes['OrderList'], ParentType, ContextType, Partial<CustomerOrdersArgs>>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Rank']>, ParentType, ContextType>;
  rankId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerCustomFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerCustomFields'] = ResolversParentTypes['CustomerCustomFields']> = {
  avatar?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  coinPoints?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  memberPoints?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unseenNoti?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerGroup'] = ResolversParentTypes['CustomerGroup']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  customers?: Resolver<ResolversTypes['CustomerList'], ParentType, ContextType, Partial<CustomerGroupCustomersArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerListResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomerList'] = ResolversParentTypes['CustomerList']> = {
  items?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DateTimeCustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['DateTimeCustomFieldConfig'] = ResolversParentTypes['DateTimeCustomFieldConfig']> = {
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletionResponse'] = ResolversParentTypes['DeletionResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  result?: Resolver<ResolversTypes['DeletionResult'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeviceToken'] = ResolversParentTypes['DeviceToken']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = {
  adjustmentSource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  amountWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AdjustmentType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailAddressConflictErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailAddressConflictError'] = ResolversParentTypes['EmailAddressConflictError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorResult'] = ResolversParentTypes['ErrorResult']> = {
  __resolveType: TypeResolveFn<'AlreadyLoggedInError' | 'CouponCodeExpiredError' | 'CouponCodeInvalidError' | 'CouponCodeLimitError' | 'EmailAddressConflictError' | 'GuestCheckoutError' | 'IdentifierChangeTokenExpiredError' | 'IdentifierChangeTokenInvalidError' | 'IneligiblePaymentMethodError' | 'IneligibleShippingMethodError' | 'InsufficientStockError' | 'InvalidCredentialsError' | 'MissingPasswordError' | 'NativeAuthStrategyError' | 'NegativeQuantityError' | 'NoActiveOrderError' | 'NotVerifiedError' | 'OrderLimitError' | 'OrderModificationError' | 'OrderPaymentStateError' | 'OrderStateTransitionError' | 'PasswordAlreadySetError' | 'PasswordResetTokenExpiredError' | 'PasswordResetTokenInvalidError' | 'PasswordValidationError' | 'PaymentDeclinedError' | 'PaymentFailedError' | 'VerificationTokenExpiredError' | 'VerificationTokenInvalidError', ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type EventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventType'] = ResolversParentTypes['EventType']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExchangePointResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExchangePoint'] = ResolversParentTypes['ExchangePoint']> = {
  channelId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Facet'] = ResolversParentTypes['Facet']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['FacetTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  valueList?: Resolver<ResolversTypes['FacetValueList'], ParentType, ContextType, Partial<FacetValueListArgs>>;
  values?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetListResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetList'] = ResolversParentTypes['FacetList']> = {
  items?: Resolver<Array<ResolversTypes['Facet']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetTranslation'] = ResolversParentTypes['FacetTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetValue'] = ResolversParentTypes['FacetValue']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['FacetValueCustomFields']>, ParentType, ContextType>;
  facet?: Resolver<ResolversTypes['Facet'], ParentType, ContextType>;
  facetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['FacetValueTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetValueCustomFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetValueCustomFields'] = ResolversParentTypes['FacetValueCustomFields']> = {
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetValueListResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetValueList'] = ResolversParentTypes['FacetValueList']> = {
  items?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetValueResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetValueResult'] = ResolversParentTypes['FacetValueResult']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  facetValue?: Resolver<ResolversTypes['FacetValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetValueTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetValueTranslation'] = ResolversParentTypes['FacetValueTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['FacetValueTranslationCustomFields']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacetValueTranslationCustomFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FacetValueTranslationCustomFields'] = ResolversParentTypes['FacetValueTranslationCustomFields']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FavoriteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Favorite'] = ResolversParentTypes['Favorite']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  productVariantId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FavoriteListResolvers<ContextType = any, ParentType extends ResolversParentTypes['FavoriteList'] = ResolversParentTypes['FavoriteList']> = {
  items?: Resolver<Array<ResolversTypes['Favorite']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FieldResolvers<ContextType = any, ParentType extends ResolversParentTypes['Field'] = ResolversParentTypes['Field']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FloatCustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['FloatCustomFieldConfig'] = ResolversParentTypes['FloatCustomFieldConfig']> = {
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FulfillmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fulfillment'] = ResolversParentTypes['Fulfillment']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lines?: Resolver<Array<ResolversTypes['FulfillmentLine']>, ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<Array<ResolversTypes['FulfillmentLine']>, ParentType, ContextType>;
  trackingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FulfillmentLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['FulfillmentLine'] = ResolversParentTypes['FulfillmentLine']> = {
  fulfillment?: Resolver<ResolversTypes['Fulfillment'], ParentType, ContextType>;
  fulfillmentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderLine?: Resolver<ResolversTypes['OrderLine'], ParentType, ContextType>;
  orderLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuestCheckoutErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuestCheckoutError'] = ResolversParentTypes['GuestCheckoutError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  errorDetail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HistoryEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['HistoryEntry'] = ResolversParentTypes['HistoryEntry']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['HistoryEntryType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HistoryEntryListResolvers<ContextType = any, ParentType extends ResolversParentTypes['HistoryEntryList'] = ResolversParentTypes['HistoryEntryList']> = {
  items?: Resolver<Array<ResolversTypes['HistoryEntry']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentifierChangeTokenExpiredErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdentifierChangeTokenExpiredError'] = ResolversParentTypes['IdentifierChangeTokenExpiredError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentifierChangeTokenInvalidErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['IdentifierChangeTokenInvalidError'] = ResolversParentTypes['IdentifierChangeTokenInvalidError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IneligiblePaymentMethodErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['IneligiblePaymentMethodError'] = ResolversParentTypes['IneligiblePaymentMethodError']> = {
  eligibilityCheckerMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IneligibleShippingMethodErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['IneligibleShippingMethodError'] = ResolversParentTypes['IneligibleShippingMethodError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InsufficientStockErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['InsufficientStockError'] = ResolversParentTypes['InsufficientStockError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  quantityAvailable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntCustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntCustomFieldConfig'] = ResolversParentTypes['IntCustomFieldConfig']> = {
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  step?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvalidCredentialsErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvalidCredentialsError'] = ResolversParentTypes['InvalidCredentialsError']> = {
  authenticationError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LocaleStringCustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocaleStringCustomFieldConfig'] = ResolversParentTypes['LocaleStringCustomFieldConfig']> = {
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocaleTextCustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocaleTextCustomFieldConfig'] = ResolversParentTypes['LocaleTextCustomFieldConfig']> = {
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocalizedStringResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocalizedString'] = ResolversParentTypes['LocalizedString']> = {
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MissingPasswordErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['MissingPasswordError'] = ResolversParentTypes['MissingPasswordError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MoneyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Money'], any> {
  name: 'Money';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addDeviceToken?: Resolver<Maybe<ResolversTypes['DeviceToken']>, ParentType, ContextType, RequireFields<MutationAddDeviceTokenArgs, 'token'>>;
  addItemToOrder?: Resolver<ResolversTypes['UpdateOrderItemsResult'], ParentType, ContextType, RequireFields<MutationAddItemToOrderArgs, 'productVariantId' | 'quantity'>>;
  addPaymentToOrder?: Resolver<ResolversTypes['AddPaymentToOrderResult'], ParentType, ContextType, RequireFields<MutationAddPaymentToOrderArgs, 'input'>>;
  adjustOrderLine?: Resolver<ResolversTypes['UpdateOrderItemsResult'], ParentType, ContextType, RequireFields<MutationAdjustOrderLineArgs, 'orderLineId' | 'quantity'>>;
  applyCouponCode?: Resolver<ResolversTypes['ApplyCouponCodeResult'], ParentType, ContextType, RequireFields<MutationApplyCouponCodeArgs, 'couponCode'>>;
  authenticate?: Resolver<ResolversTypes['AuthenticationResult'], ParentType, ContextType, RequireFields<MutationAuthenticateArgs, 'input'>>;
  createCustomerAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<MutationCreateCustomerAddressArgs, 'input'>>;
  deleteCustomerAddress?: Resolver<ResolversTypes['Success'], ParentType, ContextType, RequireFields<MutationDeleteCustomerAddressArgs, 'id'>>;
  exchangePointToVariant?: Resolver<Maybe<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<MutationExchangePointToVariantArgs, 'productVariantId'>>;
  login?: Resolver<ResolversTypes['NativeAuthenticationResult'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'username'>>;
  logout?: Resolver<ResolversTypes['Success'], ParentType, ContextType>;
  maskAsRead?: Resolver<Maybe<ResolversTypes['Success']>, ParentType, ContextType, Partial<MutationMaskAsReadArgs>>;
  refreshCustomerVerification?: Resolver<ResolversTypes['RefreshCustomerVerificationResult'], ParentType, ContextType, RequireFields<MutationRefreshCustomerVerificationArgs, 'emailAddress'>>;
  registerCustomerAccount?: Resolver<ResolversTypes['RegisterCustomerAccountResult'], ParentType, ContextType, RequireFields<MutationRegisterCustomerAccountArgs, 'input'>>;
  removeAllOrderLines?: Resolver<ResolversTypes['RemoveOrderItemsResult'], ParentType, ContextType>;
  removeCouponCode?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationRemoveCouponCodeArgs, 'couponCode'>>;
  removeOrderLine?: Resolver<ResolversTypes['RemoveOrderItemsResult'], ParentType, ContextType, RequireFields<MutationRemoveOrderLineArgs, 'orderLineId'>>;
  requestPasswordReset?: Resolver<Maybe<ResolversTypes['RequestPasswordResetResult']>, ParentType, ContextType, RequireFields<MutationRequestPasswordResetArgs, 'emailAddress'>>;
  requestUpdateCustomerEmailAddress?: Resolver<ResolversTypes['RequestUpdateCustomerEmailAddressResult'], ParentType, ContextType, RequireFields<MutationRequestUpdateCustomerEmailAddressArgs, 'newEmailAddress' | 'password'>>;
  resetPassword?: Resolver<ResolversTypes['ResetPasswordResult'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'password' | 'token'>>;
  setCustomerForOrder?: Resolver<ResolversTypes['SetCustomerForOrderResult'], ParentType, ContextType, RequireFields<MutationSetCustomerForOrderArgs, 'input'>>;
  setOrderBillingAddress?: Resolver<ResolversTypes['ActiveOrderResult'], ParentType, ContextType, RequireFields<MutationSetOrderBillingAddressArgs, 'input'>>;
  setOrderCustomFields?: Resolver<ResolversTypes['ActiveOrderResult'], ParentType, ContextType, RequireFields<MutationSetOrderCustomFieldsArgs, 'input'>>;
  setOrderShippingAddress?: Resolver<ResolversTypes['ActiveOrderResult'], ParentType, ContextType, RequireFields<MutationSetOrderShippingAddressArgs, 'input'>>;
  setOrderShippingMethod?: Resolver<ResolversTypes['SetOrderShippingMethodResult'], ParentType, ContextType, RequireFields<MutationSetOrderShippingMethodArgs, 'shippingMethodId'>>;
  submitProductReview?: Resolver<ResolversTypes['ProductReview'], ParentType, ContextType, RequireFields<MutationSubmitProductReviewArgs, 'input'>>;
  submitQuestionAnswer?: Resolver<ResolversTypes['QuestionAnswer'], ParentType, ContextType, RequireFields<MutationSubmitQuestionAnswerArgs, 'input'>>;
  toggleFavorite?: Resolver<ResolversTypes['Success'], ParentType, ContextType, RequireFields<MutationToggleFavoriteArgs, 'productVariantId'>>;
  transitionOrderToState?: Resolver<Maybe<ResolversTypes['TransitionOrderToStateResult']>, ParentType, ContextType, RequireFields<MutationTransitionOrderToStateArgs, 'state'>>;
  updateCustomer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'input'>>;
  updateCustomerAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType, RequireFields<MutationUpdateCustomerAddressArgs, 'input'>>;
  updateCustomerEmailAddress?: Resolver<ResolversTypes['UpdateCustomerEmailAddressResult'], ParentType, ContextType, RequireFields<MutationUpdateCustomerEmailAddressArgs, 'token'>>;
  updateCustomerPassword?: Resolver<ResolversTypes['UpdateCustomerPasswordResult'], ParentType, ContextType, RequireFields<MutationUpdateCustomerPasswordArgs, 'currentPassword' | 'newPassword'>>;
  verifyCustomerAccount?: Resolver<ResolversTypes['VerifyCustomerAccountResult'], ParentType, ContextType, RequireFields<MutationVerifyCustomerAccountArgs, 'token'>>;
  voteOnReview?: Resolver<ResolversTypes['ProductReview'], ParentType, ContextType, RequireFields<MutationVoteOnReviewArgs, 'id' | 'vote'>>;
};

export type NativeAuthStrategyErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['NativeAuthStrategyError'] = ResolversParentTypes['NativeAuthStrategyError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NativeAuthenticationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['NativeAuthenticationResult'] = ResolversParentTypes['NativeAuthenticationResult']> = {
  __resolveType: TypeResolveFn<'CurrentUser' | 'InvalidCredentialsError' | 'NativeAuthStrategyError' | 'NotVerifiedError', ParentType, ContextType>;
};

export type NegativeQuantityErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['NegativeQuantityError'] = ResolversParentTypes['NegativeQuantityError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NoActiveOrderErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['NoActiveOrderError'] = ResolversParentTypes['NoActiveOrderError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Address' | 'Asset' | 'AuthenticationMethod' | 'Benefit' | 'BenefitRank' | 'BenefitTranslation' | 'Blog' | 'BlogTranslation' | 'Channel' | 'Collection' | 'Country' | 'Customer' | 'CustomerGroup' | 'DeviceToken' | 'ExchangePoint' | 'Facet' | 'FacetValue' | 'Favorite' | 'Fulfillment' | 'HistoryEntry' | 'Notification' | 'NotificationAutoTemplate' | 'Order' | 'OrderLine' | 'Payment' | 'PaymentMethod' | 'Product' | 'ProductOption' | 'ProductOptionGroup' | 'ProductReview' | 'ProductVariant' | 'ProductVariantPoint' | 'Promotion' | 'Province' | 'QuestionAnswer' | 'Rank' | 'RankTranslation' | 'Refund' | 'Role' | 'Seller' | 'ShippingMethod' | 'Surcharge' | 'Tag' | 'TaxCategory' | 'TaxRate' | 'User' | 'Zone', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type NotVerifiedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotVerifiedError'] = ResolversParentTypes['NotVerifiedError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAuto?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['NotificationTranslation']>, ParentType, ContextType>;
  unSeen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationAutoTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationAutoTemplate'] = ResolversParentTypes['NotificationAutoTemplate']> = {
  bodyTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  eventType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  titleTemplate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['NotificationAutoTemplateTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationAutoTemplateTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationAutoTemplateTranslation'] = ResolversParentTypes['NotificationAutoTemplateTranslation']> = {
  bodyTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  titleTemplate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationListResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationList'] = ResolversParentTypes['NotificationList']> = {
  items?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationTranslation'] = ResolversParentTypes['NotificationTranslation']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  billingAddress?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  couponCodes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['OrderCustomFields']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  fulfillments?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType>;
  history?: Resolver<ResolversTypes['HistoryEntryList'], ParentType, ContextType, Partial<OrderHistoryArgs>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lines?: Resolver<Array<ResolversTypes['OrderLine']>, ParentType, ContextType>;
  orderPlacedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  payments?: Resolver<Maybe<Array<ResolversTypes['Payment']>>, ParentType, ContextType>;
  promotions?: Resolver<Array<ResolversTypes['Promotion']>, ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shippingAddress?: Resolver<Maybe<ResolversTypes['OrderAddress']>, ParentType, ContextType>;
  shippingLines?: Resolver<Array<ResolversTypes['ShippingLine']>, ParentType, ContextType>;
  shippingWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subTotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  subTotalWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  surcharges?: Resolver<Array<ResolversTypes['Surcharge']>, ParentType, ContextType>;
  taxSummary?: Resolver<Array<ResolversTypes['OrderTaxSummary']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  totalQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['OrderType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderAddress'] = ResolversParentTypes['OrderAddress']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  province?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetLine1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetLine2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderCustomFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderCustomFields'] = ResolversParentTypes['OrderCustomFields']> = {
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderLimitErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderLimitError'] = ResolversParentTypes['OrderLimitError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  maxItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderLine'] = ResolversParentTypes['OrderLine']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  discountedLinePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discountedLinePriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discountedUnitPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discountedUnitPriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  fulfillmentLines?: Resolver<Maybe<Array<ResolversTypes['FulfillmentLine']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  linePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  linePriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  lineTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  orderPlacedQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  proratedLinePrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  proratedLinePriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  proratedUnitPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  proratedUnitPriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taxLines?: Resolver<Array<ResolversTypes['TaxLine']>, ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  unitPriceChangeSinceAdded?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  unitPriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  unitPriceWithTaxChangeSinceAdded?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderListResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderList'] = ResolversParentTypes['OrderList']> = {
  items?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderModificationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderModificationError'] = ResolversParentTypes['OrderModificationError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderPaymentStateErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderPaymentStateError'] = ResolversParentTypes['OrderPaymentStateError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderStateTransitionErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderStateTransitionError'] = ResolversParentTypes['OrderStateTransitionError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  fromState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  toState?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transitionError?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderTaxSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderTaxSummary'] = ResolversParentTypes['OrderTaxSummary']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taxBase?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  taxTotal?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedList'] = ResolversParentTypes['PaginatedList']> = {
  __resolveType: TypeResolveFn<'AssetList' | 'BenefitList' | 'BlogList' | 'CollectionList' | 'CountryList' | 'CustomerList' | 'FacetList' | 'FacetValueList' | 'FavoriteList' | 'HistoryEntryList' | 'NotificationList' | 'OrderList' | 'ProductList' | 'ProductReviewList' | 'ProductVariantList' | 'PromotionList' | 'ProvinceList' | 'QuestionAnswerList' | 'RankList' | 'RoleList' | 'ShippingMethodList' | 'TagList' | 'TaxRateList', ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type PasswordAlreadySetErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordAlreadySetError'] = ResolversParentTypes['PasswordAlreadySetError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordResetTokenExpiredErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordResetTokenExpiredError'] = ResolversParentTypes['PasswordResetTokenExpiredError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordResetTokenInvalidErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordResetTokenInvalidError'] = ResolversParentTypes['PasswordResetTokenInvalidError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordValidationErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordValidationError'] = ResolversParentTypes['PasswordValidationError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validationErrorMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = {
  amount?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refunds?: Resolver<Array<ResolversTypes['Refund']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentDeclinedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentDeclinedError'] = ResolversParentTypes['PaymentDeclinedError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentErrorMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentFailedErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentFailedError'] = ResolversParentTypes['PaymentFailedError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentErrorMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']> = {
  checker?: Resolver<Maybe<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  handler?: Resolver<ResolversTypes['ConfigurableOperation'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['PaymentMethodTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodQuoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethodQuote'] = ResolversParentTypes['PaymentMethodQuote']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eligibilityMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEligible?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMethodTranslation'] = ResolversParentTypes['PaymentMethodTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceRangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceRange'] = ResolversParentTypes['PriceRange']> = {
  max?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  facetValues?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionGroups?: Resolver<Array<ResolversTypes['ProductOptionGroup']>, ParentType, ContextType>;
  reviewCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reviewRating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reviews?: Resolver<ResolversTypes['ProductReviewList'], ParentType, ContextType, Partial<ProductReviewsArgs>>;
  reviewsHistogram?: Resolver<Array<ResolversTypes['ProductReviewHistogramItem']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  variantList?: Resolver<ResolversTypes['ProductVariantList'], ParentType, ContextType, Partial<ProductVariantListArgs>>;
  variants?: Resolver<Array<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductList'] = ResolversParentTypes['ProductList']> = {
  items?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOption'] = ResolversParentTypes['ProductOption']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  group?: Resolver<ResolversTypes['ProductOptionGroup'], ParentType, ContextType>;
  groupId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductOptionTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionGroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroup'] = ResolversParentTypes['ProductOptionGroup']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductOptionGroupTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionGroupTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionGroupTranslation'] = ResolversParentTypes['ProductOptionGroupTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOptionTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOptionTranslation'] = ResolversParentTypes['ProductOptionTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReview'] = ResolversParentTypes['ProductReview']> = {
  authorLocation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  authorName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  downvotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productVariant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  responseCreatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  upvotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewHistogramItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReviewHistogramItem'] = ResolversParentTypes['ProductReviewHistogramItem']> = {
  bin?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  frequency?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductReviewListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductReviewList'] = ResolversParentTypes['ProductReviewList']> = {
  items?: Resolver<Array<ResolversTypes['ProductReview']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTranslation'] = ResolversParentTypes['ProductTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariant'] = ResolversParentTypes['ProductVariant']> = {
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['ProductVariantCustomFields']>, ParentType, ContextType>;
  discountAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discountPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  facetValues?: Resolver<Array<ResolversTypes['FacetValue']>, ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['ProductOption']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stockLevel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taxCategory?: Resolver<ResolversTypes['TaxCategory'], ParentType, ContextType>;
  taxRateApplied?: Resolver<ResolversTypes['TaxRate'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ProductVariantTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantCustomFieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantCustomFields'] = ResolversParentTypes['ProductVariantCustomFields']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rrp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantList'] = ResolversParentTypes['ProductVariantList']> = {
  items?: Resolver<Array<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantPointResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantPoint'] = ResolversParentTypes['ProductVariantPoint']> = {
  channelId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  point?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  variantId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantTranslation'] = ResolversParentTypes['ProductVariantTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PromotionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Promotion'] = ResolversParentTypes['Promotion']> = {
  actions?: Resolver<Array<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['ConfigurableOperation']>, ParentType, ContextType>;
  couponCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  endsAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  perCustomerUsageLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startsAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['PromotionTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  usageLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PromotionListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PromotionList'] = ResolversParentTypes['PromotionList']> = {
  items?: Resolver<Array<ResolversTypes['Promotion']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PromotionTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PromotionTranslation'] = ResolversParentTypes['PromotionTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProvinceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Province'] = ResolversParentTypes['Province']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['RegionTranslation']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProvinceListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProvinceList'] = ResolversParentTypes['ProvinceList']> = {
  items?: Resolver<Array<ResolversTypes['Province']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  activeChannel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType>;
  activeCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  activeOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>;
  availableCountries?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
  benefit?: Resolver<Maybe<ResolversTypes['Benefit']>, ParentType, ContextType, RequireFields<QueryBenefitArgs, 'id'>>;
  benefitConditions?: Resolver<Array<ResolversTypes['ConfigurableOperationDefinition']>, ParentType, ContextType>;
  benefitPromotions?: Resolver<Maybe<ResolversTypes['PromotionList']>, ParentType, ContextType, RequireFields<QueryBenefitPromotionsArgs, 'options'>>;
  benefits?: Resolver<ResolversTypes['BenefitList'], ParentType, ContextType, Partial<QueryBenefitsArgs>>;
  blog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<QueryBlogArgs, 'id'>>;
  blogs?: Resolver<ResolversTypes['BlogList'], ParentType, ContextType, Partial<QueryBlogsArgs>>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, Partial<QueryCollectionArgs>>;
  collections?: Resolver<ResolversTypes['CollectionList'], ParentType, ContextType, Partial<QueryCollectionsArgs>>;
  countFavorite?: Resolver<Maybe<ResolversTypes['Total']>, ParentType, ContextType, RequireFields<QueryCountFavoriteArgs, 'productVariantId'>>;
  eligiblePaymentMethods?: Resolver<Array<ResolversTypes['PaymentMethodQuote']>, ParentType, ContextType>;
  eligibleShippingMethods?: Resolver<Array<ResolversTypes['ShippingMethodQuote']>, ParentType, ContextType>;
  exchangePoints?: Resolver<Array<ResolversTypes['ExchangePoint']>, ParentType, ContextType>;
  facet?: Resolver<Maybe<ResolversTypes['Facet']>, ParentType, ContextType, RequireFields<QueryFacetArgs, 'id'>>;
  facets?: Resolver<ResolversTypes['FacetList'], ParentType, ContextType, Partial<QueryFacetsArgs>>;
  favorites?: Resolver<ResolversTypes['FavoriteList'], ParentType, ContextType, Partial<QueryFavoritesArgs>>;
  me?: Resolver<Maybe<ResolversTypes['CurrentUser']>, ParentType, ContextType>;
  nextOrderStates?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  notification?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<QueryNotificationArgs, 'id'>>;
  notifications?: Resolver<ResolversTypes['NotificationList'], ParentType, ContextType, Partial<QueryNotificationsArgs>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orderByCode?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderByCodeArgs, 'code'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<QueryProductArgs>>;
  productVariantPoints?: Resolver<Array<ResolversTypes['ProductVariantPoint']>, ParentType, ContextType>;
  products?: Resolver<ResolversTypes['ProductList'], ParentType, ContextType, Partial<QueryProductsArgs>>;
  questionAnswer?: Resolver<Maybe<ResolversTypes['QuestionAnswer']>, ParentType, ContextType, RequireFields<QueryQuestionAnswerArgs, 'id'>>;
  questionAnswers?: Resolver<ResolversTypes['QuestionAnswerList'], ParentType, ContextType, Partial<QueryQuestionAnswersArgs>>;
  rank?: Resolver<Maybe<ResolversTypes['Rank']>, ParentType, ContextType, RequireFields<QueryRankArgs, 'id'>>;
  ranks?: Resolver<ResolversTypes['RankList'], ParentType, ContextType, Partial<QueryRanksArgs>>;
  search?: Resolver<ResolversTypes['SearchResponse'], ParentType, ContextType, RequireFields<QuerySearchArgs, 'input'>>;
};

export type QuestionAnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionAnswer'] = ResolversParentTypes['QuestionAnswer']> = {
  admin?: Resolver<Maybe<ResolversTypes['Admin']>, ParentType, ContextType>;
  adminId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  answers?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuestionAnswer']>>>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productVariant?: Resolver<ResolversTypes['ProductVariant'], ParentType, ContextType>;
  productVariantId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  replied?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionAnswerListResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionAnswerList'] = ResolversParentTypes['QuestionAnswerList']> = {
  items?: Resolver<Array<ResolversTypes['QuestionAnswer']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RankResolvers<ContextType = any, ParentType extends ResolversParentTypes['Rank'] = ResolversParentTypes['Rank']> = {
  assets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Asset']>>>, ParentType, ContextType>;
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  featuredAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requiredPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['RankTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RankListResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankList'] = ResolversParentTypes['RankList']> = {
  items?: Resolver<Array<ResolversTypes['Rank']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RankTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankTranslation'] = ResolversParentTypes['RankTranslation']> = {
  base?: Resolver<ResolversTypes['Rank'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefreshCustomerVerificationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefreshCustomerVerificationResult'] = ResolversParentTypes['RefreshCustomerVerificationResult']> = {
  __resolveType: TypeResolveFn<'NativeAuthStrategyError' | 'Success', ParentType, ContextType>;
};

export type RefundResolvers<ContextType = any, ParentType extends ResolversParentTypes['Refund'] = ResolversParentTypes['Refund']> = {
  adjustment?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  lines?: Resolver<Array<ResolversTypes['RefundLine']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  method?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  transactionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefundLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefundLine'] = ResolversParentTypes['RefundLine']> = {
  orderLine?: Resolver<ResolversTypes['OrderLine'], ParentType, ContextType>;
  orderLineId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  refund?: Resolver<ResolversTypes['Refund'], ParentType, ContextType>;
  refundId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  __resolveType: TypeResolveFn<'Country' | 'Province', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Region']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['RegionTranslation']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
};

export type RegionTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegionTranslation'] = ResolversParentTypes['RegionTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterCustomerAccountResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterCustomerAccountResult'] = ResolversParentTypes['RegisterCustomerAccountResult']> = {
  __resolveType: TypeResolveFn<'MissingPasswordError' | 'NativeAuthStrategyError' | 'PasswordValidationError' | 'Success', ParentType, ContextType>;
};

export type RelationCustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['RelationCustomFieldConfig'] = ResolversParentTypes['RelationCustomFieldConfig']> = {
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  entity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  scalarFields?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveOrderItemsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveOrderItemsResult'] = ResolversParentTypes['RemoveOrderItemsResult']> = {
  __resolveType: TypeResolveFn<'Order' | 'OrderModificationError', ParentType, ContextType>;
};

export type RequestPasswordResetResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequestPasswordResetResult'] = ResolversParentTypes['RequestPasswordResetResult']> = {
  __resolveType: TypeResolveFn<'NativeAuthStrategyError' | 'Success', ParentType, ContextType>;
};

export type RequestUpdateCustomerEmailAddressResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequestUpdateCustomerEmailAddressResult'] = ResolversParentTypes['RequestUpdateCustomerEmailAddressResult']> = {
  __resolveType: TypeResolveFn<'EmailAddressConflictError' | 'InvalidCredentialsError' | 'NativeAuthStrategyError' | 'Success', ParentType, ContextType>;
};

export type ResetPasswordResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResetPasswordResult'] = ResolversParentTypes['ResetPasswordResult']> = {
  __resolveType: TypeResolveFn<'CurrentUser' | 'NativeAuthStrategyError' | 'NotVerifiedError' | 'PasswordResetTokenExpiredError' | 'PasswordResetTokenInvalidError' | 'PasswordValidationError', ParentType, ContextType>;
};

export type RoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Role'] = ResolversParentTypes['Role']> = {
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['Permission']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleListResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleList'] = ResolversParentTypes['RoleList']> = {
  items?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchReindexResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchReindexResponse'] = ResolversParentTypes['SearchReindexResponse']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResponse'] = ResolversParentTypes['SearchResponse']> = {
  collections?: Resolver<Array<ResolversTypes['CollectionResult']>, ParentType, ContextType>;
  facetValues?: Resolver<Array<ResolversTypes['FacetValueResult']>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['SearchResult']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  collectionIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  currencyCode?: Resolver<ResolversTypes['CurrencyCode'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  facetIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  facetValueIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['SearchResultPrice'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['SearchResultPrice'], ParentType, ContextType>;
  productAsset?: Resolver<Maybe<ResolversTypes['SearchResultAsset']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productVariantAsset?: Resolver<Maybe<ResolversTypes['SearchResultAsset']>, ParentType, ContextType>;
  productVariantId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productVariantName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultAssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResultAsset'] = ResolversParentTypes['SearchResultAsset']> = {
  focalPoint?: Resolver<Maybe<ResolversTypes['Coordinate']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  preview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResultPrice'] = ResolversParentTypes['SearchResultPrice']> = {
  __resolveType: TypeResolveFn<'PriceRange' | 'SinglePrice', ParentType, ContextType>;
};

export type SellerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Seller'] = ResolversParentTypes['Seller']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetCustomerForOrderResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetCustomerForOrderResult'] = ResolversParentTypes['SetCustomerForOrderResult']> = {
  __resolveType: TypeResolveFn<'AlreadyLoggedInError' | 'EmailAddressConflictError' | 'GuestCheckoutError' | 'NoActiveOrderError' | 'Order', ParentType, ContextType>;
};

export type SetOrderShippingMethodResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SetOrderShippingMethodResult'] = ResolversParentTypes['SetOrderShippingMethodResult']> = {
  __resolveType: TypeResolveFn<'IneligibleShippingMethodError' | 'NoActiveOrderError' | 'Order' | 'OrderModificationError', ParentType, ContextType>;
};

export type ShippingLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingLine'] = ResolversParentTypes['ShippingLine']> = {
  discountedPrice?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discountedPriceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  discounts?: Resolver<Array<ResolversTypes['Discount']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  shippingMethod?: Resolver<ResolversTypes['ShippingMethod'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingMethod'] = ResolversParentTypes['ShippingMethod']> = {
  calculator?: Resolver<ResolversTypes['ConfigurableOperation'], ParentType, ContextType>;
  checker?: Resolver<ResolversTypes['ConfigurableOperation'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fulfillmentHandlerCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  translations?: Resolver<Array<ResolversTypes['ShippingMethodTranslation']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingMethodListResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingMethodList'] = ResolversParentTypes['ShippingMethodList']> = {
  items?: Resolver<Array<ResolversTypes['ShippingMethod']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingMethodQuoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingMethodQuote'] = ResolversParentTypes['ShippingMethodQuote']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShippingMethodTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShippingMethodTranslation'] = ResolversParentTypes['ShippingMethodTranslation']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  languageCode?: Resolver<ResolversTypes['LanguageCode'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SinglePriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['SinglePrice'] = ResolversParentTypes['SinglePrice']> = {
  value?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringCustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringCustomFieldConfig'] = ResolversParentTypes['StringCustomFieldConfig']> = {
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<ResolversTypes['StringFieldOption']>>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringFieldOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StringFieldOption'] = ResolversParentTypes['StringFieldOption']> = {
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['Success'] = ResolversParentTypes['Success']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SurchargeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Surcharge'] = ResolversParentTypes['Surcharge']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  priceWithTax?: Resolver<ResolversTypes['Money'], ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taxLines?: Resolver<Array<ResolversTypes['TaxLine']>, ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagList'] = ResolversParentTypes['TagList']> = {
  items?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxCategory'] = ResolversParentTypes['TaxCategory']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxLineResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxLine'] = ResolversParentTypes['TaxLine']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxRateResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxRate'] = ResolversParentTypes['TaxRate']> = {
  category?: Resolver<ResolversTypes['TaxCategory'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  customerGroup?: Resolver<Maybe<ResolversTypes['CustomerGroup']>, ParentType, ContextType>;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  zone?: Resolver<ResolversTypes['Zone'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxRateListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxRateList'] = ResolversParentTypes['TaxRateList']> = {
  items?: Resolver<Array<ResolversTypes['TaxRate']>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TextCustomFieldConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['TextCustomFieldConfig'] = ResolversParentTypes['TextCustomFieldConfig']> = {
  description?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  internal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<Array<ResolversTypes['LocalizedString']>>, ParentType, ContextType>;
  list?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nullable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  readonly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ui?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Total'] = ResolversParentTypes['Total']> = {
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransitionOrderToStateResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransitionOrderToStateResult'] = ResolversParentTypes['TransitionOrderToStateResult']> = {
  __resolveType: TypeResolveFn<'Order' | 'OrderStateTransitionError', ParentType, ContextType>;
};

export type UpdateCustomerEmailAddressResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCustomerEmailAddressResult'] = ResolversParentTypes['UpdateCustomerEmailAddressResult']> = {
  __resolveType: TypeResolveFn<'IdentifierChangeTokenExpiredError' | 'IdentifierChangeTokenInvalidError' | 'NativeAuthStrategyError' | 'Success', ParentType, ContextType>;
};

export type UpdateCustomerPasswordResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateCustomerPasswordResult'] = ResolversParentTypes['UpdateCustomerPasswordResult']> = {
  __resolveType: TypeResolveFn<'InvalidCredentialsError' | 'NativeAuthStrategyError' | 'PasswordValidationError' | 'Success', ParentType, ContextType>;
};

export type UpdateOrderItemsResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateOrderItemsResult'] = ResolversParentTypes['UpdateOrderItemsResult']> = {
  __resolveType: TypeResolveFn<'InsufficientStockError' | 'NegativeQuantityError' | 'Order' | 'OrderLimitError' | 'OrderModificationError', ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  authenticationMethods?: Resolver<Array<ResolversTypes['AuthenticationMethod']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['Role']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerificationTokenExpiredErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerificationTokenExpiredError'] = ResolversParentTypes['VerificationTokenExpiredError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerificationTokenInvalidErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerificationTokenInvalidError'] = ResolversParentTypes['VerificationTokenInvalidError']> = {
  errorCode?: Resolver<ResolversTypes['ErrorCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifyCustomerAccountResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerifyCustomerAccountResult'] = ResolversParentTypes['VerifyCustomerAccountResult']> = {
  __resolveType: TypeResolveFn<'CurrentUser' | 'MissingPasswordError' | 'NativeAuthStrategyError' | 'PasswordAlreadySetError' | 'PasswordValidationError' | 'VerificationTokenExpiredError' | 'VerificationTokenInvalidError', ParentType, ContextType>;
};

export type ZoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['Zone'] = ResolversParentTypes['Zone']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['Region']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ActiveOrderResult?: ActiveOrderResultResolvers<ContextType>;
  AddPaymentToOrderResult?: AddPaymentToOrderResultResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  Adjustment?: AdjustmentResolvers<ContextType>;
  Admin?: AdminResolvers<ContextType>;
  AlreadyLoggedInError?: AlreadyLoggedInErrorResolvers<ContextType>;
  ApplyCouponCodeResult?: ApplyCouponCodeResultResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetList?: AssetListResolvers<ContextType>;
  AuthenticationMethod?: AuthenticationMethodResolvers<ContextType>;
  AuthenticationResult?: AuthenticationResultResolvers<ContextType>;
  AutoLinkOperationDefinition?: AutoLinkOperationDefinitionResolvers<ContextType>;
  Benefit?: BenefitResolvers<ContextType>;
  BenefitList?: BenefitListResolvers<ContextType>;
  BenefitRank?: BenefitRankResolvers<ContextType>;
  BenefitTranslation?: BenefitTranslationResolvers<ContextType>;
  Blog?: BlogResolvers<ContextType>;
  BlogList?: BlogListResolvers<ContextType>;
  BlogTranslation?: BlogTranslationResolvers<ContextType>;
  BooleanCustomFieldConfig?: BooleanCustomFieldConfigResolvers<ContextType>;
  Channel?: ChannelResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionBreadcrumb?: CollectionBreadcrumbResolvers<ContextType>;
  CollectionList?: CollectionListResolvers<ContextType>;
  CollectionResult?: CollectionResultResolvers<ContextType>;
  CollectionTranslation?: CollectionTranslationResolvers<ContextType>;
  ConfigArg?: ConfigArgResolvers<ContextType>;
  ConfigArgDefinition?: ConfigArgDefinitionResolvers<ContextType>;
  ConfigurableOperation?: ConfigurableOperationResolvers<ContextType>;
  ConfigurableOperationDefinition?: ConfigurableOperationDefinitionResolvers<ContextType>;
  Coordinate?: CoordinateResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  CountryList?: CountryListResolvers<ContextType>;
  CouponCodeExpiredError?: CouponCodeExpiredErrorResolvers<ContextType>;
  CouponCodeInvalidError?: CouponCodeInvalidErrorResolvers<ContextType>;
  CouponCodeLimitError?: CouponCodeLimitErrorResolvers<ContextType>;
  CurrentUser?: CurrentUserResolvers<ContextType>;
  CurrentUserChannel?: CurrentUserChannelResolvers<ContextType>;
  CustomField?: CustomFieldResolvers<ContextType>;
  CustomFieldConfig?: CustomFieldConfigResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerCustomFields?: CustomerCustomFieldsResolvers<ContextType>;
  CustomerGroup?: CustomerGroupResolvers<ContextType>;
  CustomerList?: CustomerListResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DateTimeCustomFieldConfig?: DateTimeCustomFieldConfigResolvers<ContextType>;
  DeletionResponse?: DeletionResponseResolvers<ContextType>;
  DeviceToken?: DeviceTokenResolvers<ContextType>;
  Discount?: DiscountResolvers<ContextType>;
  EmailAddressConflictError?: EmailAddressConflictErrorResolvers<ContextType>;
  ErrorResult?: ErrorResultResolvers<ContextType>;
  EventType?: EventTypeResolvers<ContextType>;
  ExchangePoint?: ExchangePointResolvers<ContextType>;
  Facet?: FacetResolvers<ContextType>;
  FacetList?: FacetListResolvers<ContextType>;
  FacetTranslation?: FacetTranslationResolvers<ContextType>;
  FacetValue?: FacetValueResolvers<ContextType>;
  FacetValueCustomFields?: FacetValueCustomFieldsResolvers<ContextType>;
  FacetValueList?: FacetValueListResolvers<ContextType>;
  FacetValueResult?: FacetValueResultResolvers<ContextType>;
  FacetValueTranslation?: FacetValueTranslationResolvers<ContextType>;
  FacetValueTranslationCustomFields?: FacetValueTranslationCustomFieldsResolvers<ContextType>;
  Favorite?: FavoriteResolvers<ContextType>;
  FavoriteList?: FavoriteListResolvers<ContextType>;
  Field?: FieldResolvers<ContextType>;
  FloatCustomFieldConfig?: FloatCustomFieldConfigResolvers<ContextType>;
  Fulfillment?: FulfillmentResolvers<ContextType>;
  FulfillmentLine?: FulfillmentLineResolvers<ContextType>;
  GuestCheckoutError?: GuestCheckoutErrorResolvers<ContextType>;
  HistoryEntry?: HistoryEntryResolvers<ContextType>;
  HistoryEntryList?: HistoryEntryListResolvers<ContextType>;
  IdentifierChangeTokenExpiredError?: IdentifierChangeTokenExpiredErrorResolvers<ContextType>;
  IdentifierChangeTokenInvalidError?: IdentifierChangeTokenInvalidErrorResolvers<ContextType>;
  IneligiblePaymentMethodError?: IneligiblePaymentMethodErrorResolvers<ContextType>;
  IneligibleShippingMethodError?: IneligibleShippingMethodErrorResolvers<ContextType>;
  InsufficientStockError?: InsufficientStockErrorResolvers<ContextType>;
  IntCustomFieldConfig?: IntCustomFieldConfigResolvers<ContextType>;
  InvalidCredentialsError?: InvalidCredentialsErrorResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LocaleStringCustomFieldConfig?: LocaleStringCustomFieldConfigResolvers<ContextType>;
  LocaleTextCustomFieldConfig?: LocaleTextCustomFieldConfigResolvers<ContextType>;
  LocalizedString?: LocalizedStringResolvers<ContextType>;
  MissingPasswordError?: MissingPasswordErrorResolvers<ContextType>;
  Money?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  NativeAuthStrategyError?: NativeAuthStrategyErrorResolvers<ContextType>;
  NativeAuthenticationResult?: NativeAuthenticationResultResolvers<ContextType>;
  NegativeQuantityError?: NegativeQuantityErrorResolvers<ContextType>;
  NoActiveOrderError?: NoActiveOrderErrorResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  NotVerifiedError?: NotVerifiedErrorResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  NotificationAutoTemplate?: NotificationAutoTemplateResolvers<ContextType>;
  NotificationAutoTemplateTranslation?: NotificationAutoTemplateTranslationResolvers<ContextType>;
  NotificationList?: NotificationListResolvers<ContextType>;
  NotificationTranslation?: NotificationTranslationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderAddress?: OrderAddressResolvers<ContextType>;
  OrderCustomFields?: OrderCustomFieldsResolvers<ContextType>;
  OrderLimitError?: OrderLimitErrorResolvers<ContextType>;
  OrderLine?: OrderLineResolvers<ContextType>;
  OrderList?: OrderListResolvers<ContextType>;
  OrderModificationError?: OrderModificationErrorResolvers<ContextType>;
  OrderPaymentStateError?: OrderPaymentStateErrorResolvers<ContextType>;
  OrderStateTransitionError?: OrderStateTransitionErrorResolvers<ContextType>;
  OrderTaxSummary?: OrderTaxSummaryResolvers<ContextType>;
  PaginatedList?: PaginatedListResolvers<ContextType>;
  PasswordAlreadySetError?: PasswordAlreadySetErrorResolvers<ContextType>;
  PasswordResetTokenExpiredError?: PasswordResetTokenExpiredErrorResolvers<ContextType>;
  PasswordResetTokenInvalidError?: PasswordResetTokenInvalidErrorResolvers<ContextType>;
  PasswordValidationError?: PasswordValidationErrorResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentDeclinedError?: PaymentDeclinedErrorResolvers<ContextType>;
  PaymentFailedError?: PaymentFailedErrorResolvers<ContextType>;
  PaymentMethod?: PaymentMethodResolvers<ContextType>;
  PaymentMethodQuote?: PaymentMethodQuoteResolvers<ContextType>;
  PaymentMethodTranslation?: PaymentMethodTranslationResolvers<ContextType>;
  PriceRange?: PriceRangeResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductList?: ProductListResolvers<ContextType>;
  ProductOption?: ProductOptionResolvers<ContextType>;
  ProductOptionGroup?: ProductOptionGroupResolvers<ContextType>;
  ProductOptionGroupTranslation?: ProductOptionGroupTranslationResolvers<ContextType>;
  ProductOptionTranslation?: ProductOptionTranslationResolvers<ContextType>;
  ProductReview?: ProductReviewResolvers<ContextType>;
  ProductReviewHistogramItem?: ProductReviewHistogramItemResolvers<ContextType>;
  ProductReviewList?: ProductReviewListResolvers<ContextType>;
  ProductTranslation?: ProductTranslationResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  ProductVariantCustomFields?: ProductVariantCustomFieldsResolvers<ContextType>;
  ProductVariantList?: ProductVariantListResolvers<ContextType>;
  ProductVariantPoint?: ProductVariantPointResolvers<ContextType>;
  ProductVariantTranslation?: ProductVariantTranslationResolvers<ContextType>;
  Promotion?: PromotionResolvers<ContextType>;
  PromotionList?: PromotionListResolvers<ContextType>;
  PromotionTranslation?: PromotionTranslationResolvers<ContextType>;
  Province?: ProvinceResolvers<ContextType>;
  ProvinceList?: ProvinceListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QuestionAnswer?: QuestionAnswerResolvers<ContextType>;
  QuestionAnswerList?: QuestionAnswerListResolvers<ContextType>;
  Rank?: RankResolvers<ContextType>;
  RankList?: RankListResolvers<ContextType>;
  RankTranslation?: RankTranslationResolvers<ContextType>;
  RefreshCustomerVerificationResult?: RefreshCustomerVerificationResultResolvers<ContextType>;
  Refund?: RefundResolvers<ContextType>;
  RefundLine?: RefundLineResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  RegionTranslation?: RegionTranslationResolvers<ContextType>;
  RegisterCustomerAccountResult?: RegisterCustomerAccountResultResolvers<ContextType>;
  RelationCustomFieldConfig?: RelationCustomFieldConfigResolvers<ContextType>;
  RemoveOrderItemsResult?: RemoveOrderItemsResultResolvers<ContextType>;
  RequestPasswordResetResult?: RequestPasswordResetResultResolvers<ContextType>;
  RequestUpdateCustomerEmailAddressResult?: RequestUpdateCustomerEmailAddressResultResolvers<ContextType>;
  ResetPasswordResult?: ResetPasswordResultResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RoleList?: RoleListResolvers<ContextType>;
  SearchReindexResponse?: SearchReindexResponseResolvers<ContextType>;
  SearchResponse?: SearchResponseResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  SearchResultAsset?: SearchResultAssetResolvers<ContextType>;
  SearchResultPrice?: SearchResultPriceResolvers<ContextType>;
  Seller?: SellerResolvers<ContextType>;
  SetCustomerForOrderResult?: SetCustomerForOrderResultResolvers<ContextType>;
  SetOrderShippingMethodResult?: SetOrderShippingMethodResultResolvers<ContextType>;
  ShippingLine?: ShippingLineResolvers<ContextType>;
  ShippingMethod?: ShippingMethodResolvers<ContextType>;
  ShippingMethodList?: ShippingMethodListResolvers<ContextType>;
  ShippingMethodQuote?: ShippingMethodQuoteResolvers<ContextType>;
  ShippingMethodTranslation?: ShippingMethodTranslationResolvers<ContextType>;
  SinglePrice?: SinglePriceResolvers<ContextType>;
  StringCustomFieldConfig?: StringCustomFieldConfigResolvers<ContextType>;
  StringFieldOption?: StringFieldOptionResolvers<ContextType>;
  Success?: SuccessResolvers<ContextType>;
  Surcharge?: SurchargeResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagList?: TagListResolvers<ContextType>;
  TaxCategory?: TaxCategoryResolvers<ContextType>;
  TaxLine?: TaxLineResolvers<ContextType>;
  TaxRate?: TaxRateResolvers<ContextType>;
  TaxRateList?: TaxRateListResolvers<ContextType>;
  TextCustomFieldConfig?: TextCustomFieldConfigResolvers<ContextType>;
  Total?: TotalResolvers<ContextType>;
  TransitionOrderToStateResult?: TransitionOrderToStateResultResolvers<ContextType>;
  UpdateCustomerEmailAddressResult?: UpdateCustomerEmailAddressResultResolvers<ContextType>;
  UpdateCustomerPasswordResult?: UpdateCustomerPasswordResultResolvers<ContextType>;
  UpdateOrderItemsResult?: UpdateOrderItemsResultResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  VerificationTokenExpiredError?: VerificationTokenExpiredErrorResolvers<ContextType>;
  VerificationTokenInvalidError?: VerificationTokenInvalidErrorResolvers<ContextType>;
  VerifyCustomerAccountResult?: VerifyCustomerAccountResultResolvers<ContextType>;
  Zone?: ZoneResolvers<ContextType>;
};

