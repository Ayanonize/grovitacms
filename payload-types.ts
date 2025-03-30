/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    institute: Institute;
    coursecategories: Coursecategory;
    courses: Course;
    'course-modules': CourseModule;
    widget1: Widget1;
    consultation: Consultation;
    priceplans: Priceplan;
    purchases: Purchase;
    mocktestpriceplans: Mocktestpriceplan;
    mocktestpurchases: Mocktestpurchase;
    examcategories: Examcategory;
    mocktestquestions: Mocktestquestion;
    userresponses: Userresponse;
    questions: Question;
    pages: Page;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  username?: string | null;
  name?: string | null;
  role: 'admin' | 'siteusers' | 'accountmanager';
  instituteId?: (string | null) | Institute;
  image?: (string | null) | Media;
  linkedin_link?: string | null;
  twitter_link?: string | null;
  active?: boolean | null;
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean | null;
  apiKey?: string | null;
  apiKeyIndex?: string | null;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "institute".
 */
export interface Institute {
  id: string;
  title?: string | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  institutelogo?: (string | null) | Media;
  createdBy?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  text?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "coursecategories".
 */
export interface Coursecategory {
  id: string;
  title: string;
  slug: string;
  seotitle: string;
  seodescription: string;
  h1title?: string | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  brandlogo?: (string | null) | Media;
  categorybanner?: (string | null) | Media;
  active?: boolean | null;
  popular?: boolean | null;
  upcoming?: boolean | null;
  instituteId?: (string | null) | Institute;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "courses".
 */
export interface Course {
  id: string;
  title: string;
  summary: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  image?: (string | null) | Media;
  category: string | Coursecategory;
  slug?: string | null;
  isFeatured?: boolean | null;
  isPopular?: boolean | null;
  instituteId: string | Institute;
  course_content?:
    | {
        topic: string;
        subtopic: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        };
        id?: string | null;
      }[]
    | null;
  who_is_this_for?:
    | {
        title: string;
        image?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  usp?:
    | {
        text: string;
        subText?: string | null;
        id?: string | null;
      }[]
    | null;
  learnings?:
    | {
        learning_item: string;
        id?: string | null;
      }[]
    | null;
  skills?:
    | {
        skill_item: string;
        id?: string | null;
      }[]
    | null;
  active?: boolean | null;
  upcoming?: boolean | null;
  token?: string | null;
  seotitle?: string | null;
  seodescription?: string | null;
  completion_time?: string | null;
  price_ind?: string | null;
  sales_price_ind?: string | null;
  price_usd?: string | null;
  sales_price_usd?: string | null;
  youtube_url?: string | null;
  bot_url?: string | null;
  prioritysequence?: string | null;
  feedback?:
    | {
        name: string;
        profession?: string | null;
        comment: string;
        id?: string | null;
      }[]
    | null;
  faq?:
    | {
        question: string;
        answer: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "course-modules".
 */
export interface CourseModule {
  id: string;
  course: string | Course;
  module: string;
  topics?:
    | {
        title: string;
        content?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  active?: boolean | null;
  sequence: number;
  instituteId: string | Institute;
  seotitle: string;
  seodescription: string;
  resources?:
    | {
        file?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "widget1".
 */
export interface Widget1 {
  id: string;
  title: string;
  bgcolor: string;
  bgcolor1?: string | null;
  ctatext?: string | null;
  targeturl?: string | null;
  active?: boolean | null;
  instituteId?: (string | null) | Institute;
  blocks?:
    | {
        block_title: string;
        block_subtext?: string | null;
        block_image?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "consultation".
 */
export interface Consultation {
  id: string;
  name: string;
  email: string;
  phone: string;
  summary?: string | null;
  website?: string | null;
  createdBy?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "priceplans".
 */
export interface Priceplan {
  id: string;
  plan_title: string;
  icon?: (string | null) | Media;
  usp?:
    | {
        text: string;
        id?: string | null;
      }[]
    | null;
  price_usd: number;
  price_india: number;
  sale_price_usd?: number | null;
  sale_price_india?: number | null;
  isBestSeller?: boolean | null;
  instituteId?: (string | null) | Institute;
  active?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "purchases".
 */
export interface Purchase {
  id: string;
  user: string | User;
  course: string | Course;
  pricePlan: string | Priceplan;
  amountPaid: number;
  currency: 'INR' | 'USD';
  paymentStatus: 'pending' | 'success' | 'failed';
  razorpayOrderId?: string | null;
  razorpayPaymentId?: string | null;
  razorpaySignature?: string | null;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "mocktestpriceplans".
 */
export interface Mocktestpriceplan {
  id: string;
  plan_title: string;
  plan_id: string;
  Frequency: string;
  price_india: number;
  sale_price_india?: number | null;
  instituteId?: (string | null) | Institute;
  active?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "mocktestpurchases".
 */
export interface Mocktestpurchase {
  id: string;
  user: string | User;
  examCategory: string | Examcategory;
  amountPaid: number;
  currency: 'INR' | 'USD';
  paymentStatus: 'pending' | 'success' | 'failed';
  paymentType: 'one-time' | 'recurring';
  razorpayOrderId?: string | null;
  razorpaySubscriptionId?: string | null;
  subscriptionStatus?: ('created' | 'active' | 'paused' | 'cancelled' | 'halted' | 'failed') | null;
  subscriptionStartDate?: string | null;
  subscriptionEndDate?: string | null;
  billingCycle?: ('monthly' | 'quarterly' | 'semi-annual' | 'annual') | null;
  razorpayPaymentId?: string | null;
  razorpaySignature?: string | null;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "examcategories".
 */
export interface Examcategory {
  id: string;
  title: string;
  slug: string;
  seotitle: string;
  seodescription: string;
  h1title?: string | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  brandlogo?: (string | null) | Media;
  exambanner?: (string | null) | Media;
  active?: boolean | null;
  popular?: boolean | null;
  upcoming?: boolean | null;
  instituteId: string | Institute;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "mocktestquestions".
 */
export interface Mocktestquestion {
  id: string;
  question: string;
  questionimage?: (string | null) | Media;
  answers?:
    | {
        answerText?: string | null;
        answerImage?: (string | null) | Media;
        isCorrect: boolean;
        id?: string | null;
      }[]
    | null;
  instituteId: string | Institute;
  examCategoryId: string | Examcategory;
  subject: string;
  topicsCovered?:
    | {
        topic?: string | null;
        id?: string | null;
      }[]
    | null;
  difficulty?: ('easy' | 'medium' | 'hard' | 'very-hard') | null;
  attempts?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "userresponses".
 */
export interface Userresponse {
  id: string;
  userId: string;
  questionId: string | Mocktestquestion;
  categoryId: string | Examcategory;
  subject: string;
  topics?: string | null;
  difficulty: 'easy' | 'medium' | 'hard' | 'very-hard';
  timeSpent: number;
  isCorrect?: boolean | null;
  isSkipped: boolean;
  skipCount: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "questions".
 */
export interface Question {
  id: string;
  course: string | Course;
  module?: (string | null) | CourseModule;
  question: string;
  type: 'single-choice' | 'multi-choice' | 'text';
  options?:
    | {
        option: string;
        isCorrect?: boolean | null;
        id?: string | null;
      }[]
    | null;
  correctAnswer?: string | null;
  instituteId?: (string | null) | Institute;
  active?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title?: string | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'institute';
        value: string | Institute;
      } | null)
    | ({
        relationTo: 'coursecategories';
        value: string | Coursecategory;
      } | null)
    | ({
        relationTo: 'courses';
        value: string | Course;
      } | null)
    | ({
        relationTo: 'course-modules';
        value: string | CourseModule;
      } | null)
    | ({
        relationTo: 'widget1';
        value: string | Widget1;
      } | null)
    | ({
        relationTo: 'consultation';
        value: string | Consultation;
      } | null)
    | ({
        relationTo: 'priceplans';
        value: string | Priceplan;
      } | null)
    | ({
        relationTo: 'purchases';
        value: string | Purchase;
      } | null)
    | ({
        relationTo: 'mocktestpriceplans';
        value: string | Mocktestpriceplan;
      } | null)
    | ({
        relationTo: 'mocktestpurchases';
        value: string | Mocktestpurchase;
      } | null)
    | ({
        relationTo: 'examcategories';
        value: string | Examcategory;
      } | null)
    | ({
        relationTo: 'mocktestquestions';
        value: string | Mocktestquestion;
      } | null)
    | ({
        relationTo: 'userresponses';
        value: string | Userresponse;
      } | null)
    | ({
        relationTo: 'questions';
        value: string | Question;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null);
  globalSlug?: string | null;
  _lastEdited: {
    user: {
      relationTo: 'users';
      value: string | User;
    };
    editedAt?: string | null;
  };
  isLocked?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}