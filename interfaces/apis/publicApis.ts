export interface ApiParams {
  title?: string
  description?: string
  auth?: string
  https?: boolean
  cors?: string
  category?: string
}

export enum AuthType {
  NONE = '',
  API_KEY = 'apiKey',
  OAUTH = 'OAuth',
}

export enum CorsType {
  YES = 'yes',
  NO = 'no',
  UNKNOWN = 'unknown',
}

export enum CategoryType {
  ANIMALS = 'Animals',
  ANIME = 'Anime',
  ANTI_MALWARE = 'Anti-Malware',
  ART_AND_DESIGN = 'Art & Design',
  BOOKS = 'Books',
  BUSINESS = 'Business',
  CALENDAR = 'Calendar',
  CLOUD_STORAGE_AND_FILE_SHARING = 'Cloud Storage & File Sharing',
  CONTINUOUS_INTEGRATION = 'Continuous Integration',
  CRYPTOCURRENCY = 'Cryptocurrency',
  CURRENCY_EXCHANGE = 'Currency Exchange',
  DATE_VALIDATION = 'Data Validation',
  DEVELOPMENT = 'Development',
  DICTIONARIES = 'Dictionaries',
  DOCUMENTS_AND_PRODUCTIVITY = 'Documents & Productivity',
  ENVIRONMENT = 'Environment',
  EVENTS = 'Events',
  FINANCE = 'Finance',
  FOOD_AND_DRINK = 'Food & Drink',
  GAMES_AND_COMICS = 'Games & Comics',
  GEOCODING = 'Geocoding',
  GOVERNMENT = 'Government',
  HEALTH = 'Health',
  JOBS = 'Jobs',
  MACHINE_LEARNING = 'Machine Learning',
  MUSIC = 'Music',
  NEWS = 'News',
  OPEN_DATA = 'Open Data',
  OPEN_SOURCE_PROJECTS = 'Open Source Projects',
  PATENT = 'Patent',
  PERSONALITY = 'Personality',
  PHOTOGRAPHY = 'Photography',
  SCIENCE_AND_MATH = 'Science & Math',
  SECURITY = 'Security',
  SHOPPING = 'Shopping',
  SOCIAL = 'Social',
  SPORTS_AND_FITNESS = 'Sports & Fitness',
  TEST_DATA = 'Test Data',
  TEXT_ANALYSIS = 'Text Analysis',
  TRACKING = 'Tracking',
  TRANSPORTATITION = 'Transportation',
  URL_SHORTENERS = 'URL Shorteners',
  VEHICLE = 'Vehicle',
  VIDEO = 'Video',
  WEATHER = 'Weather',
}

export interface Api {
  /** API name */
  API: string
  /** API authentication type */
  Auth: string
  /** API category */
  Category: CategoryType
  /** does the API support CORS */
  Cors: CorsType
  /** API description */
  Description: string
  /** does the API support HTTPS */
  HTTPS: boolean
  /** API link */
  Link: string
}
