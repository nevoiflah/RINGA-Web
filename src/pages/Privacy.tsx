import type { ReactNode } from "react";
import { H2, H3, LegalLayout, P, Strong, UL } from "../components/LegalPage";
import { useLang } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/translations";

const CONTACT = "ringatestuser@gmail.com";
const WEBSITE = "ringaapp.com";

const Mail = () => (
  <a href={`mailto:${CONTACT}`} className="text-purple hover:text-coral">
    {CONTACT}
  </a>
);

const CONTENT: Record<Lang, { title: string; subtitle: string; body: ReactNode }> = {
  he: {
    title: "מדיניות פרטיות",
    subtitle: "עודכן לאחרונה: 21 ביולי 2026",
    body: (
      <>
        <P>
          מדיניות זו מסבירה כיצד RINGA אוספת, משתמשת, שומרת, משתפת ומגנה על מידע אישי בעת השימוש
          באפליקציית RINGA, באתר ובשירותים הקשורים אליהם.
        </P>

        <H2>1. מבוא</H2>
        <P>
          ברוכים הבאים ל־RINGA. RINGA היא פלטפורמה חברתית וקהילתית מבוססת מיקום, שנועדה לסייע
          לאנשים לגלות ולהתחבר לאנשים אחרים, לקהילות, ל־אירועים ולפעילויות הנמצאים סביבם בעולם
          האמיתי.
        </P>
        <P>
          פרטיותכם חשובה לנו. מדיניות פרטיות זו מסבירה איזה מידע RINGA אוספת, מדוע אנו אוספים
          אותו, כיצד אנו משתמשים בו ומגנים עליו, מתי הוא עשוי להימסר לספקי שירות או לגורמים אחרים,
          למשך כמה זמן הוא עשוי להישמר, ואילו אפשרויות וזכויות עומדות לרשותכם.
        </P>
        <P>
          מדיניות פרטיות זו חלה כאשר אתם משתמשים באפליקציית RINGA, באתר RINGA בכתובת {WEBSITE}{" "}
          ובשירותים נוספים המופעלים תחת השם RINGA (יחד: "השירות"). בשימוש בשירות אתם מאשרים כי
          המידע האישי שלכם יטופל בהתאם למדיניות זו.
        </P>

        <H2>2. מי אנחנו</H2>
        <P>
          RINGA מופעלת כיום על ידי מייסדיה ועדיין אינה מאוגדת כישות משפטית נפרדת. כאשר RINGA
          תתאגד, או אם זהות הגוף האחראי להפעלת השירות תשתנה, מדיניות פרטיות זו עשויה להתעדכן
          בהתאם.
        </P>
        <P>
          לשאלות, בקשות או חששות בנושאי פרטיות ניתן ליצור איתנו קשר בדוא"ל: <Mail />.
        </P>

        <H2>3. דרישת גיל</H2>
        <P>
          RINGA מיועדת אך ורק לבני 18 ומעלה. אינכם רשאים ליצור חשבון או להשתמש ב־RINGA אם טרם
          מלאו לכם 18.
        </P>
        <P>
          במהלך ההרשמה המשתמשים נדרשים למסור את גילם ו/או מידע על תאריך הלידה. ביצירת חשבון אתם
          מצהירים כי המידע שמסרתם לגבי גילכם נכון וכי אתם בני 18 לפחות.
        </P>
        <P>
          אם ייוודע לנו שאדם מתחת לגיל 18 יצר חשבון או מסר מידע אישי באמצעות השירות, אנו רשאים
          להשעות או למחוק את החשבון ולנקוט צעדים סבירים למחיקת המידע האישי הקשור אליו.
        </P>

        <H2>4. מידע שאנו אוספים</H2>
        <P>
          אנו אוספים מידע בשלוש דרכים עיקריות: (1) מידע שאתם מוסרים לנו ישירות; (2) מידע שנוצר
          בעת השימוש ב־RINGA; ו־(3) מידע הדרוש להפעלה הטכנית, לאבטחה, לפונקציות מבוססות מיקום
          ולתקשורת.
        </P>

        <H3>4.1 מידע על החשבון</H3>
        <P>
          בעת יצירת חשבון RINGA אתם מוסרים מידע הדרוש ליצירת החשבון ולתחזוקתו. מידע זה עשוי לכלול
          כתובת דוא"ל, גיל ו/או תאריך לידה, שם משתמש, מידע על התחברות ואימות, סטטוס החשבון ומידע
          על אימות כתובת הדוא"ל.
        </P>
        <P>
          RINGA משתמשת כיום בהרשמה באמצעות דוא"ל ובאימות דוא"ל. RINGA אינה משתמשת כיום באימות SMS
          לצורך יצירת חשבון.
        </P>

        <H3>4.2 מידע בפרופיל</H3>
        <P>
          בעת יצירת הפרופיל או עריכתו אתם עשויים למסור מידע על עצמכם, לרבות שם, שם משתמש, גיל,
          מגדר, תמונות פרופיל, ביוגרפיה או תיאור פרופיל, תחומי עניין, העדפות, השכלה, עיסוק או מידע
          תעסוקתי ומידע נוסף שתבחרו מרצונכם לכלול.
        </P>
        <P>
          מידע מסוים שתבחרו למסור עשוי להיחשב מידע רגיש או מידע הזוכה להגנה מיוחדת לפי דיני מדינות
          מסוימות. מומלץ למסור בפרופיל רק מידע שנוח לכם שיהיה זמין באמצעות RINGA בהתאם לאופן
          פעולת השירות.
        </P>

        <H3>4.3 תמונות פרופיל</H3>
        <P>
          משתמשים יכולים להעלות תמונות לפרופיל RINGA שלהם. לצורך כך RINGA עשויה לבקש גישה למצלמת
          המכשיר ו/או לספריית התמונות. תמונות הפרופיל נשמרות באמצעות תשתית אחסון ענן מאובטחת,
          לרבות Google Cloud Storage. התמונות עשויות להיות מוצגות למשתמשי RINGA אחרים בהתאם
          לפונקציונליות השירות ולהגדרות הפרטיות הרלוונטיות.
        </P>

        <H3>4.4 מידע על מיקום</H3>
        <P>
          מידע על מיקום הוא רכיב מרכזי ב־RINGA. בכפוף להרשאה שתעניקו במכשיר, RINGA עשויה לאסוף
          ולעבד את המיקום הגיאוגרפי של המכשיר, לרבות מידע הדרוש כדי לקבוע אם משתמשי RINGA אחרים
          או אירועים נמצאים בקרבתכם.
        </P>
        <P>
          מידע על מיקום עשוי להיאסף בזמן השימוש באפליקציה, וכן - כאשר הענקתם את הרשאת המכשיר
          המתאימה - כאשר RINGA פועלת ברקע. שימוש במיקום ברקע עשוי להיעשות לצורך פונקציות
          תלויות־מיקום, לרבות Live Activities, פונקציות קרובים רלוונטיות והתראות.
        </P>

        <H3>4.5 קרובים</H3>
        <P>
          פונקציית קרובים של RINGA נועדה לסייע למשתמשים לגלות משתמשים אחרים הנמצאים בקרבת מקום.
          הרדיוס המרבי של קרובים הוא כיום כ־200 מטר. RINGA אינה מציגה לכם את המרחק המדויק של
          משתמש אחר.
        </P>
        <P>
          המידע המוצג ב־קרובים עשוי להשתנות כאשר משתמשים זזים, משנים הגדרות פרטיות, מפעילים Ghost
          Mode, מאבדים חיבור, סוגרים את האפליקציה או הופכים ללא זמינים מסיבה אחרת. מידע מיקום עשוי
          להיות מושפע גם מדיוק GPS, הגדרות המכשיר, תנאי הרשת, התנהגות מערכת ההפעלה וגורמים נוספים
          שאינם בשליטת RINGA. לכן, הופעת משתמש ב־קרובים אינה מהווה אישור למיקומו הפיזי המדויק.
        </P>

        <H3>4.6 Ghost Mode ופרטיות מיקום</H3>
        <P>
          RINGA מספקת אפשרויות פרטיות שעשויות לאפשר למשתמשים להסתיר את עצמם ממשתמשים אחרים,
          לרבות Ghost Mode ואמצעי פרטיות מיקום רלוונטיים נוספים. כאשר אפשרויות אלה מופעלות,
          החשיפה שלכם למשתמשים אחרים עשויה להיות מוגבלת בהתאם להגדרות הפיצ'ר.
        </P>
        <P>
          אפשרויות אלה אינן מונעות בהכרח מ־RINGA לעבד מידע מיקום כאשר העיבוד עדיין נדרש להפעלת
          השירות, לאספקת פונקציונליות שביקשתם, לשמירה על אבטחה או לעמידה בדרישות הדין.
        </P>

        <H3>4.7 אירועים</H3>
        <P>
          RINGA כוללת פיצ'ר בשם אירועים, המאפשר למשתמשים להשתתף בקהילות ובחוויות הקשורות למיקום או
          לאירוע. אירועים עשויים להיות פרטיים או להיות מוגדרים באופן אחר על ידי מנהל ה־אירוע.
        </P>
        <P>
          בהתאם להגדרת ה־אירוע, ניתן יהיה להצטרף באמצעות קוד QR, קישור ייעודי או דרך אחרת שתעמיד
          RINGA. אירועים עשויים לכלול מידע כגון שם ה־אירוע, משתמשים משתתפים, מידע על האירוע או
          ה־אירוע, משך הפעילות, אינטראקציות, Likes, Matches והודעות או שיחות שנוצרו במסגרת
          האינטראקציות ב־אירוע.
        </P>
        <P>
          רק מנהלים מורשים או אנשים שקיבלו הרשאה מפורשת מ־RINGA רשאים ליצור אירועים. הזמינות ומשך
          הפעילות של כל אירוע עשויים להשתנות בהתאם להגדרותיו.
        </P>

        <H3>4.8 הודעות וצ'אטים</H3>
        <P>
          RINGA מאפשרת למשתמשים לתקשר באמצעות הודעות טקסט. כיום RINGA אינה מאפשרת לשלוח תמונות,
          סרטונים או קבצים בצ'אט.
        </P>
        <P>
          הודעות כפופות למנגנוני השמירה של RINGA. כיום, הודעות שלא קיבלו מענה עשויות להימחק
          אוטומטית לאחר כ־24 שעות, וצ'אטים פעילים עשויים להימחק אוטומטית לאחר כ־48 שעות של חוסר
          פעילות.
        </P>
        <P>
          ייתכן שלמשתמשים תהיה גם אפשרות למחוק הודעות או שיחות. כאשר פונקציית המחיקה מציינת שהודעה
          או שיחה נמחקה עבור שני המשתתפים, המידע הרלוונטי מוסר מהמערכת הפעילה עבור שני הצדדים,
          בכפוף לשמירה טכנית מוגבלת בגיבויים כמפורט במדיניות זו.
        </P>

        <H3>4.9 דיווחים, חסימות ומידע בטיחותי</H3>
        <P>
          משתמשים יכולים לדווח על משתמשים אחרים ולחסום אותם. בעת שליחת דיווח אנו עשויים לאסוף מידע
          המזהה את החשבון המדווח, מידע על האירוע הרלוונטי, מידע הקשור לאינטראקציה שדווחה, מידע
          שתמסרו במסגרת הדיווח ומידע נוסף הנדרש באופן סביר לצורך בדיקתו.
        </P>
        <P>
          דיווחים עשויים להיבדק על ידי מנהל RINGA. המנהל רשאי להחליט על הפעולה המתאימה, לרבות
          אזהרה, הגבלה, השעיה או חסימה של משתמש מגישה לחלק מ־RINGA או לכולה.
        </P>
        <P>
          כאשר משתמש חוסם משתמש אחר, השירות עשוי למנוע משני המשתמשים לראות זה את זה או ליצור
          אינטראקציה ביניהם. אנו עשויים לשמור מידע הנוגע לדיווחים, אירועי בטיחות ופעולות אכיפה
          כאשר הדבר נדרש באופן סביר להגנה על משתמשים, למניעת שימוש לרעה, לבדיקת הפרות או להגנה מפני
          תביעות משפטיות.
        </P>

        <H3>4.10 ניטור ותוכן</H3>
        <P>
          RINGA עשויה להשתמש במערכות טכנולוגיות או אוטומטיות כדי לסייע בזיהוי פעילות או תוכן
          העלולים להיות פוגעניים, מזיקים, הונאתיים, אסורים או בלתי הולמים. כאשר נדרשת בדיקה
          אנושית, דיווחים ומידע רלוונטי עשויים להיבדק על ידי מנהל RINGA מורשה. מערכות אוטומטיות
          עשויות לסייע בתהליך, אך החלטות אכיפה עשויות לכלול גם בדיקה אנושית.
        </P>

        <H3>4.11 התראות</H3>
        <P>
          RINGA עשויה לשלוח התראות הקשורות לפעילות קרובים, אירועים, הודעות, Likes, Matches או
          אינטראקציות רלוונטיות, Live Activities, ענייני חשבון או אבטחה, עדכוני שירות ופונקציות
          נוספות של RINGA.
        </P>
        <P>
          ההתראות נשלחות באמצעות שירותים שעשויים לכלול Apple Push Notification service (APNs),
          Expo Push Service ו־Firebase Cloud Messaging (FCM) במכשירי Android. ניתן לשלוט בהרשאות
          ההתראות דרך הגדרות המכשיר ובמקומות שבהם האפשרות קיימת גם דרך הגדרות RINGA.
        </P>

        <H3>4.12 מידע טכני</H3>
        <P>
          בעת השימוש ב־RINGA, מידע טכני מסוים עשוי להיות מעובד ככל שנדרש להפעלת השירות ולאבטחתו.
          בהתאם למכשיר ולתשתית, מידע זה עשוי לכלול כתובת IP, סוג מכשיר, מערכת הפעלה, גרסת
          האפליקציה, מידע על הרשת, חותמות זמן, מזהים טכניים ומידע הדרוש לאימות, אבטחה והפעלת
          השירות.
        </P>
        <P>
          RINGA אינה משתמשת כיום בפלטפורמות צד שלישי לניתוח התנהגותי או לדיווח קריסות כגון Firebase
          Analytics, Firebase Crashlytics או Sentry.
        </P>

        <H2>5. הרשאות שבהן RINGA משתמשת</H2>
        <P>
          בהתאם למכשיר ולפיצ'רים שבהם תבחרו להשתמש, RINGA עשויה לבקש הרשאות למיקום - כולל מיקום
          ברקע כאשר אושר - למצלמה, לספריית התמונות ולהתראות.
        </P>
        <P>
          המיקום משמש ל־קרובים, לפונקציות מבוססות מיקום, ל־Live Activities ולפונקציות קשורות.
          גישה למצלמה עשויה לשמש לצילום תמונות פרופיל ולסריקת QR כאשר הדבר רלוונטי. גישה לספריית
          התמונות מאפשרת לבחור תמונות פרופיל. הרשאת התראות מאפשרת ל־RINGA לשלוח הודעות, התראות
          אירועים, התראות קרובים, Matches, Live Activities והתראות שירות רלוונטיות נוספות.
        </P>
        <P>
          RINGA אינה דורשת כיום גישה לאנשי הקשר, למיקרופון, ל־Bluetooth, ל־NFC או ליומן לצורך
          הפעילות הרגילה של השירות.
        </P>

        <H2>6. כיצד אנו משתמשים במידע</H2>
        <P>
          אנו עשויים להשתמש במידע אישי כדי ליצור ולתחזק את החשבון; לספק ולהפעיל את RINGA; להפעיל
          קרובים ו־אירועים; להציג פרופילים רלוונטיים; לאפשר אינטראקציות, Matches ותקשורת בין
          משתמשים; לספק פונקציות מבוססות מיקום ו־Live Activities; לשלוח הודעות אימות והתראות
          שירות; לתחזק, לפתור תקלות ולאבטח את השירות; לבדוק דיווחים; לאכוף את כללי RINGA; למנוע
          הטרדה, שימוש לרעה, ספאם, הונאה, חשבונות מזויפים ופעילות בלתי מורשית; ולעמוד בחובות
          משפטיות ובבקשות חוקיות של רשויות או בתי משפט.
        </P>

        <H2>7. בסיסים משפטיים לעיבוד מידע</H2>
        <P>
          כאשר דיני פרטיות החלים עלינו, לרבות GDPR, מחייבים אותנו לזהות בסיס משפטי לעיבוד מידע
          אישי, אנו עשויים להסתמך על אחד או יותר מהבסיסים הבאים: ביצוע חוזה - כאשר העיבוד נדרש כדי
          לספק את RINGA ואת הפונקציונליות שביקשתם; הסכמה - לרבות לגבי הרשאות מכשיר מסוימות כגון
          גישה למיקום; אינטרסים לגיטימיים - כגון הגנה על משתמשים, מניעת הונאה ושימוש לרעה, אבטחת
          השירות ואכיפת הכללים; וחובה משפטית - כאשר העיבוד או השמירה נדרשים לפי דין או בקשה חוקית.
        </P>

        <H2>8. כיצד אנו משתפים מידע</H2>
        <P>
          RINGA אינה מוכרת כיום מידע אישי של משתמשים למפרסמים ואינה משתפת כיום מידע של משתמשים עם
          צדדים שלישיים לצורך פרסום ממוקד. עם זאת, מידע עשוי להיחשף למשתמשים אחרים כחלק מהשירות,
          לספקי שירות המפעילים את RINGA, לצורכי משפט ובטיחות או במסגרת עסקה עסקית כמפורט להלן.
        </P>

        <H3>8.1 משתמשי RINGA אחרים</H3>
        <P>
          בהתאם לפרופיל, להגדרות ולאופן השימוש שלכם בשירות, משתמשים אחרים עשויים לראות את הפרופיל
          שלכם, תמונות הפרופיל, שם המשתמש או השם, הגיל, הביוגרפיה, תחומי העניין, השתתפות ב־אירועים,
          Likes או Matches כאשר רלוונטי, הודעות שתשלחו להם ומידע נוסף שתבחרו להציג באמצעות RINGA.
          אף ש־קרובים עשוי להצביע על כך שמשתמשים נמצאים באותו אזור כללי, RINGA אינה מציגה מרחק
          מדויק בין משתמשים.
        </P>

        <H3>8.2 ספקי שירות</H3>
        <P>RINGA משתמשת כיום בספקי השירות הבאים לצורך הפעלת השירות:</P>
        <UL>
          <li>
            <Strong>Replit</Strong> - אירוח שרתים, תשתית מסד נתונים, תשתית קבצים ופעילות Backend
            קשורה.
          </li>
          <li>
            <Strong>Google Cloud Storage</Strong> - אחסון תמונות פרופיל.
          </li>
          <li>
            <Strong>Resend</Strong> - שליחת הודעות דוא"ל לאימות חשבון.
          </li>
          <li>
            <Strong>Apple Push Notification service (APNs)</Strong> - התראות במכשירי Apple
            נתמכים.
          </li>
          <li>
            <Strong>Expo Push Service</Strong> - תשתית Push Notifications.
          </li>
          <li>
            <Strong>Firebase Cloud Messaging (FCM)</Strong> - התראות במכשירי Android.
          </li>
          <li>
            <Strong>Google Maps</Strong> - פונקציונליות מפה במכשירי Android.
          </li>
        </UL>
        <P>
          ספקים אלה עשויים לעבד מידע מוגבל ככל שנדרש לצורך אספקת שירותיהם ל־RINGA. העיבוד שלהם
          עשוי להיות כפוף גם למדיניות הפרטיות והאבטחה שלהם.
        </P>

        <H3>8.3 גילוי מידע לצורכי משפט ובטיחות</H3>
        <P>
          אנו עשויים לחשוף מידע כאשר אנו סבורים באופן סביר שהדבר נדרש לצורך עמידה בדין החל; מענה
          לצו בית משפט תקף, זימון או בקשה חוקית של רשות; בדיקת פעילות בלתי חוקית; הגנה על הזכויות
          או הבטיחות של RINGA, משתמשיה או אחרים; איתור או מניעת הונאה או איומי אבטחה; אכיפת תנאי
          השימוש או כללי הקהילה; או ביסוס, מימוש או הגנה על תביעות משפטיות.
        </P>

        <H3>8.4 עסקאות עסקיות</H3>
        <P>
          אם RINGA תעבור או תשקול עסקה תאגידית כגון התאגדות, מימון, השקעה, מיזוג, רכישה, ארגון
          מחדש, מכירת נכסים או העברת השירות, מידע הקשור ל־RINGA עשוי להיחשף או לעבור כחלק מהעסקה,
          בכפוף לדין החל.
        </P>

        <H2>9. העברות מידע בינלאומיות</H2>
        <P>
          RINGA וספקי השירות שלה עשויים לעבד או לאחסן מידע במדינות שאינן המדינה שבה אתם מתגוררים.
          משמעות הדבר היא שהמידע עשוי להיות מועבר בין מדינות, לרבות למדינות שבהן דיני הגנת המידע
          שונים מאלה שבתחום השיפוט שלכם. כאשר הדין החל מחייב זאת, נשתמש באמצעים משפטיים מתאימים
          להגנה על העברות בינלאומיות של מידע אישי.
        </P>

        <H2>10. שמירת מידע</H2>
        <P>
          אנו שואפים לשמור מידע אישי רק למשך הזמן הנדרש באופן סביר למטרות המתוארות במדיניות זו.
          קטגוריות שונות של מידע עשויות להישמר לתקופות שונות.
        </P>
        <P>
          מידע על החשבון והפרופיל נשמר בדרך כלל כל עוד חשבון RINGA פעיל וככל שנדרש לצורך אספקת
          השירות. תמונות פרופיל נשמרות בדרך כלל כל עוד הן משויכות לחשבון או עד למחיקתן או החלפתן,
          בכפוף לשמירה טכנית מוגבלת בגיבויים.
        </P>
        <P>
          הודעות שלא נענו עשויות להימחק אוטומטית לאחר כ־24 שעות, וצ'אטים פעילים עשויים להימחק
          אוטומטית לאחר כ־48 שעות של חוסר פעילות.
        </P>
        <P>
          מידע הנוגע לדיווחים, אכיפה, הונאה, שימוש לרעה או אירועי בטיחות עשוי להישמר לתקופה ארוכה
          יותר כאשר הדבר נדרש באופן סביר להגנה על משתמשים, למניעת הפרות חוזרות, לעמידה בחובות
          משפטיות או להגנה מפני תביעות.
        </P>
        <P>
          כאשר אתם מוחקים את חשבון RINGA, המידע המשויך לחשבון נמחק מהמערכות הפעילות, למעט כאשר
          נדרשת שמירה מוגבלת לצרכים משפטיים, אבטחתיים, מניעת הונאה, יישוב מחלוקות או צרכים טכניים.
        </P>

        <H2>11. גיבויים</H2>
        <P>
          תשתית מסד הנתונים של RINGA מתארחת כיום באמצעות Replit. גיבויים עשויים להיווצר ולהישמר
          ברמת ספק התשתית. כתוצאה מכך, מידע שנמחק מהמערכות הפעילות של RINGA עשוי להישאר זמנית
          בגיבויים טכניים מאובטחים עד שהגיבויים יידרסו או יימחקו בהתאם למחזור חיי הגיבוי של ספק
          האירוח.
        </P>
        <P>
          איננו משתמשים בעותקי גיבוי כדי להחזיר מידע משתמש שנמחק לשימוש פעיל, למעט כאשר הדבר נדרש
          מבחינה טכנית או משפטית.
        </P>

        <H2>12. מחיקת חשבון ומידע</H2>
        <P>
          ניתן למחוק את חשבון RINGA מתוך האפליקציה. מחיקת החשבון נועדה למחוק מהמערכות הפעילות של
          RINGA את המידע האישי המשויך לחשבון, בכפוף לחריגים המוגבלים המתוארים במדיניות זו.
        </P>
        <P>
          ניתן גם לפנות אלינו בנוגע למחיקת מידע אישי בדוא"ל <Mail />. ייתכן שנצטרך לאמת את זהותכם
          לפני טיפול בבקשות פרטיות מסוימות.
        </P>

        <H2>13. גישה למידע שלכם</H2>
        <P>
          בהתאם למקום מגוריכם, ייתכן שיש לכם זכות לבקש גישה למידע אישי ש־RINGA מחזיקה עליכם. RINGA
          אינה מציעה כיום כלי אוטומטי מסוג "Download My Data". עם זאת, כאשר הדין החל מחייב זאת,
          ניתן לבקש גישה למידע האישי או עותק ממנו באמצעות פנייה ל־<Mail />. אנו עשויים לבקש מידע
          סביר הנדרש לאימות זהותכם לפני שנשיב.
        </P>

        <H2>14. זכויות הפרטיות שלכם</H2>
        <P>
          בהתאם למקום מגוריכם ולדין החל, ייתכן שעומדות לכם זכויות הכוללות גישה למידע האישי; קבלת
          מידע על אופן עיבודו; תיקון מידע שגוי; בקשת מחיקה; בקשת הגבלה של עיבוד מסוים; התנגדות
          לעיבוד מסוים; משיכת הסכמה כאשר העיבוד מבוסס על הסכמה; קבלת מידע מסוים בפורמט נייד; הגשת
          תלונה לרשות הגנת מידע רלוונטית; וזכויות פרטיות נוספות הקיימות לפי הדין. זכויות אלה עשויות
          להיות כפופות לחריגים משפטיים.
        </P>
        <P>
          להגשת בקשת פרטיות ניתן לפנות ל־<Mail />.
        </P>

        <H2>15. זכויות פרטיות בקליפורניה</H2>
        <P>
          אם RINGA תהיה כפופה לחוק פרטיות הצרכן של קליפורניה (CCPA), כפי שתוקן, תושבי קליפורניה
          עשויים להיות זכאים לזכויות נוספות בנוגע למידע האישי שלהם, לרבות הזכות לדעת, למחוק, לתקן,
          לבחור שלא להשתתף במכירה או בשיתוף מסוים, להגביל שימושים מסוימים במידע אישי רגיש ולא
          להיות מופלים בשל מימוש זכויות פרטיות רלוונטיות.
        </P>
        <P>
          RINGA אינה מוכרת כיום מידע אישי ואינה משתפת כיום מידע אישי לצורך פרסום התנהגותי
          חוצה־הקשרים.
        </P>

        <H2>16. Cookies, פרסום ומעקב</H2>
        <P>
          אתר RINGA אינו משתמש כיום ב־Cookies לצורכי אנליטיקה או פרסום. RINGA אינה משתמשת כיום
          ב־Google Analytics באתר. כמו כן, RINGA אינה משתמשת כיום בכלי מעקב פרסומיים של צד שלישי
          באפליקציה ואינה משתפת מידע אישי עם חברות פרסום לצורך פרסום ממוקד.
        </P>
        <P>
          אם בעתיד נוסיף Cookies, כלי אנליטיקה, טכנולוגיות פרסום או פונקציות מעקב דומות, נעדכן את
          הגילויים שלנו ובמקום שבו הדבר נדרש נספק אפשרויות בחירה או מנגנוני הסכמה מתאימים.
        </P>

        <H2>17. אבטחה</H2>
        <P>
          אנו משתמשים באמצעים טכניים וארגוניים סבירים שנועדו להגן על מידע אישי מפני גישה בלתי
          מורשית, אובדן, שימוש לרעה, שינוי או חשיפה. אמצעים אלה עשויים לכלול בקרות גישה, מנגנוני
          אימות ותשתית מאובטחת המסופקת על ידי ספקי האירוח והענן שלנו.
        </P>
        <P>
          עם זאת, לא ניתן להבטיח ששירות מבוסס אינטרנט, אפליקציה, מסד נתונים או העברה אלקטרונית יהיו
          מאובטחים לחלוטין. המשתמשים אחראים לשמירה על סודיות ואבטחת פרטי הגישה לחשבון. אם אתם
          סבורים שחשבון RINGA או המידע שלכם נפגעו, פנו אלינו מיד ב־<Mail />.
        </P>

        <H2>18. בטיחות ופרטיות מיקום</H2>
        <P>
          מכיוון ש־RINGA מאפשרת חיבורים המבוססים בחלקם על קרבה פיזית, חשוב להבין שלטכנולוגיות
          מבוססות מיקום יש מגבלות מובנות. RINGA אינה מציגה את המרחק המדויק של משתמש אחר, אינה
          מתחייבת שהזמינות המוצגת משקפת את מיקומו הפיזי המדויק והנוכחי של המשתמש, אינה יכולה
          להבטיח את דיוק ה־GPS או מידע המיקום של המכשיר, אינה יכולה להבטיח שמשתמש שמוצג כקרוב עדיין
          נמצא בקרבת מקום, ואינה מספקת למשתמשים את הקואורדינטות המדויקות של אדם אחר במסגרת חוויית
          קרובים הרגילה.
        </P>

        <H2>19. אינטראקציות בעולם האמיתי</H2>
        <P>
          RINGA נועדה לסייע ביצירת חיבורים בין אנשים וקהילות בעולם האמיתי. עם זאת, RINGA אינה
          שולטת בהתנהגות המשתמשים מחוץ לשירות. המשתמשים אחראים להחליט האם, מתי וכיצד ליצור
          אינטראקציה או להיפגש עם משתמשים אחרים.
        </P>
        <P>
          RINGA אינה מתחייבת לזהותו של כל משתמש; לדיוק המידע שמסרו משתמשים; לכוונותיהם או
          להתנהגותם; לבטיחות של אינטראקציה מסוימת; לזמינותו של משתמש אחר; לכך ש־אירוע או אירוע
          יתקיימו כפי שתוארו; או לכך שאדם המוצג ב־קרובים יישאר באותו מקום.
        </P>
        <P>
          מידע והמלצות בטיחות עשויים להינתן בנפרד באמצעות מרכז הבטיחות או כללי הקהילה של RINGA.
        </P>

        <H2>20. אירועים ואירועים של צדדים שלישיים</H2>
        <P>
          חלק מה־אירועים עשויים להיות קשורים לאירועים, מקומות, קהילות או פעילויות המופעלים על ידי
          צדדים שלישיים. אלא אם צוין במפורש אחרת, RINGA אינה מארגנת, מפעילה או שולטת במקום או
          באירוע של צד שלישי רק משום ש־אירוע הקשור אליו זמין דרך RINGA.
        </P>
        <P>
          המקום, המארגן או המנהל הרלוונטי עשויים להיות אחראים לאירוע שלהם, למתחם הפיזי, למדיניות
          הכניסה, לפעילויות ולהתנהלות. מדיניות פרטיות זו חלה על עיבוד המידע על ידי RINGA באמצעות
          השירות. מארגן אירוע או מקום צד שלישי עשוי לעבד מידע בנפרד בהתאם למדיניות הפרטיות שלו,
          כאשר הדבר רלוונטי.
        </P>

        <H2>21. שינויים במדיניות פרטיות זו</H2>
        <P>
          RINGA תמשיך להתפתח, ומדיניות פרטיות זו עשויה להשתנות מעת לעת. אנו עשויים לעדכן אותה כדי
          לשקף פיצ'רים חדשים, שינויים באופן עיבוד המידע, ספקי שירות חדשים, פונקציות תשלום או מנוי
          חדשות, שינויים בדין, התפתחויות אבטחה או שינויים ארגוניים, לרבות התאגדות RINGA.
        </P>
        <P>
          כאשר נבצע שינויים מהותיים, אנו עשויים למסור הודעה באמצעות השירות, בדוא"ל, באתר או בדרך
          מתאימה אחרת. תאריך "עודכן לאחרונה" בראש המדיניות מציין מתי גרסה זו עודכנה לאחרונה.
        </P>

        <H2>22. פיצ'רים עתידיים בתשלום</H2>
        <P>
          RINGA אינה מציעה כיום מנויי Premium או רכישות בתוך האפליקציה. בעתיד אנו עשויים להציע
          מנויי Premium, מנויים מתחדשים, רכישות חד־פעמיות או פונקציות אחרות בתשלום.
        </P>
        <P>
          אם נוסיף אפשרויות תשלום, אנו עשויים לעדכן מדיניות זו כדי להסביר איזה מידע קשור לרכישות
          ואילו ספקי תשלום או חנויות אפליקציות מעורבים.
        </P>

        <H2>23. יצירת קשר</H2>
        <P>
          אם יש לכם שאלות בנוגע למדיניות פרטיות זו, לנוהלי הפרטיות של RINGA או למידע האישי שלכם, או
          אם ברצונכם לממש זכות פרטיות רלוונטית, ניתן ליצור איתנו קשר:
        </P>
        <P>
          RINGA
          <br />
          דוא"ל: <Mail />
          <br />
          אתר: {WEBSITE}
        </P>
      </>
    ),
  },

  en: {
    title: "Privacy Policy",
    subtitle: "Last Updated: July 21, 2026",
    body: (
      <>
        <P>
          This Privacy Policy explains how RINGA collects, uses, stores, shares, and protects
          personal information when you use the RINGA mobile application, website, and related
          services.
        </P>

        <H2>1. Introduction</H2>
        <P>
          Welcome to RINGA. RINGA is a location-based social and community platform designed to
          help people discover and connect with other people, communities, Events, and activities
          around them in the real world.
        </P>
        <P>
          Your privacy matters to us. This Privacy Policy explains what information RINGA
          ("RINGA," "we," "us," or "our") collects, why we collect it, how we use and protect it,
          when it may be disclosed to service providers or other parties, how long it may be
          retained, and the choices and rights available to you.
        </P>
        <P>
          This Privacy Policy applies when you use the RINGA mobile application, the RINGA website
          at {WEBSITE}, and other services operated under the RINGA name (collectively, the
          "Service"). By using the Service, you acknowledge that your personal information will be
          handled as described in this Privacy Policy.
        </P>

        <H2>2. Who We Are</H2>
        <P>
          RINGA is currently operated by its founders and has not yet been incorporated as a
          separate legal entity. When RINGA is incorporated or the identity of the entity
          responsible for operating the Service changes, this Privacy Policy may be updated
          accordingly.
        </P>
        <P>
          For privacy-related questions, requests, or concerns, contact us at: <Mail />.
        </P>

        <H2>3. Age Requirement</H2>
        <P>
          RINGA is intended exclusively for individuals who are 18 years of age or older. You may
          not create an account or use RINGA if you are under 18.
        </P>
        <P>
          During registration, users are required to provide their age or date of birth
          information. By creating an account, you represent that the information you provide
          regarding your age is accurate and that you are at least 18 years old.
        </P>
        <P>
          If we become aware that an individual under 18 has created an account or provided
          personal information through the Service, we may suspend or delete the account and take
          reasonable steps to delete the associated personal information.
        </P>

        <H2>4. Information We Collect</H2>
        <P>
          We collect information in three main ways: (1) information you provide directly to us;
          (2) information generated when you use RINGA; and (3) information necessary for
          technical operation, security, location-based functionality, and communications.
        </P>

        <H3>4.1 Account Information</H3>
        <P>
          When you create a RINGA account, you provide information necessary to create and
          maintain your account. This may include your email address, age and/or date of birth,
          username, login and authentication information, account status, and email verification
          information.
        </P>
        <P>
          RINGA currently uses email-based registration and email verification. RINGA does not
          currently use SMS verification for account creation.
        </P>

        <H3>4.2 Profile Information</H3>
        <P>
          When creating or editing your profile, you may provide information about yourself,
          including name, username, age, gender, profile photographs, biography or profile
          description, interests, preferences, education, occupation or employment information,
          and other information you voluntarily choose to include.
        </P>
        <P>
          Certain information you choose to provide may be considered sensitive or specially
          protected information under the laws of some jurisdictions. You should only provide
          profile information that you are comfortable making available through RINGA as described
          in the Service.
        </P>

        <H3>4.3 Profile Photos</H3>
        <P>
          Users may upload photographs to their RINGA profiles. To enable this functionality,
          RINGA may request access to your device camera and/or photo library. Profile
          photographs are stored using secure cloud storage infrastructure, including Google
          Cloud Storage. Your profile photographs may be visible to other RINGA users according
          to the functionality of the Service and your applicable privacy settings.
        </P>

        <H3>4.4 Location Information</H3>
        <P>
          Location information is a core component of RINGA. With your device permission, RINGA
          may collect and process your device's geolocation, including location information
          necessary to determine whether other RINGA users or Events are located near you.
        </P>
        <P>
          Location information may be collected while you are using the application and, where you
          have granted the appropriate device permission, while RINGA is operating in the
          background. Background location may be used to support location-dependent functionality,
          including Live Activities and relevant nearby functionality or notifications.
        </P>

        <H3>4.5 Nearby</H3>
        <P>
          RINGA's Nearby functionality is designed to help users discover other users who are
          physically nearby. The maximum Nearby radius is currently approximately 200 meters.
          RINGA does not display another user's exact distance to you.
        </P>
        <P>
          The information presented through Nearby may change as users move, change privacy
          settings, activate Ghost Mode, lose connectivity, close the application, or otherwise
          become unavailable. Location information can also be affected by GPS accuracy, device
          settings, network conditions, operating-system behavior, and other factors outside
          RINGA's control. Accordingly, the presence of another user in Nearby should not be
          interpreted as confirmation of that person's exact physical location.
        </P>

        <H3>4.6 Ghost Mode and Location Privacy</H3>
        <P>
          RINGA provides privacy functionality that may allow users to hide themselves from other
          users, including through Ghost Mode and other applicable location privacy controls. When
          these features are activated, your visibility to other users may be restricted according
          to the applicable feature settings.
        </P>
        <P>
          These features do not necessarily prevent RINGA from processing location information
          where such processing remains necessary to operate the Service, provide requested
          functionality, maintain security, or comply with applicable law.
        </P>

        <H3>4.7 Events</H3>
        <P>
          RINGA includes a feature called "Events," which allows users to participate in location-
          or event-related communities and experiences. Events may be private or may be configured
          otherwise by the Event administrator.
        </P>
        <P>
          Depending on the Event configuration, users may be able to join a Event through a QR code,
          a dedicated link, or another method made available by RINGA. Events may contain
          information including the Event name, participating users, event or Event information, Event
          duration, user interactions, Likes, Matches, and messages or chats generated through
          Event interactions.
        </P>
        <P>
          Only authorized administrators or individuals specifically authorized by RINGA may
          create Events. The availability and duration of each Event may vary according to its
          configuration.
        </P>

        <H3>4.8 Messages and Chats</H3>
        <P>
          RINGA allows users to communicate through text-based messaging functionality. RINGA
          currently does not allow users to send photographs, videos, or files through chat.
        </P>
        <P>
          Messages are subject to RINGA's retention mechanisms. Currently, messages that do not
          receive a response may be automatically deleted after approximately 24 hours, and active
          chats may be automatically deleted after approximately 48 hours of inactivity.
        </P>
        <P>
          Users may also have functionality allowing them to delete messages or conversations.
          When deletion functionality indicates that a message or conversation is deleted for both
          participants, the applicable information is removed from the active system for both
          sides, subject to limited technical backup retention as described in this Policy.
        </P>

        <H3>4.9 Reports, Blocks and Safety Information</H3>
        <P>
          Users can report and block other users. When you submit a report, we may collect
          information identifying the reported account, information about the relevant incident,
          information associated with the reported interaction, information you provide as part of
          your report, and other information reasonably necessary to investigate the report.
        </P>
        <P>
          Reports may be reviewed by a RINGA administrator. The administrator may decide what
          action is appropriate, including warning, restricting, suspending, or blocking a user
          from accessing some or all of RINGA.
        </P>
        <P>
          When one user blocks another user, the Service may prevent those users from seeing or
          interacting with one another. We may retain information relating to reports, safety
          incidents, and enforcement actions when reasonably necessary to protect users, prevent
          abuse, investigate violations, or defend legal claims.
        </P>

        <H3>4.10 Moderation</H3>
        <P>
          RINGA may use technological or automated systems to assist in identifying potentially
          abusive, harmful, fraudulent, prohibited, or otherwise inappropriate activity or
          content. Where human review is required, reports and relevant information may be
          reviewed by an authorized RINGA administrator. Automated systems may assist the
          moderation process, but enforcement decisions may also involve human review.
        </P>

        <H3>4.11 Notifications</H3>
        <P>
          RINGA may send notifications relating to Nearby activity, Events, messages, Matches,
          Likes or relevant interactions, Live Activities, account or security matters, Service
          updates, and other RINGA functionality.
        </P>
        <P>
          Notifications are delivered using services that may include Apple Push Notification
          service (APNs), Expo Push Service, and Firebase Cloud Messaging (FCM) on Android
          devices. You can control notification permissions through your device settings and,
          where available, through settings within RINGA.
        </P>

        <H3>4.12 Technical Information</H3>
        <P>
          When you use RINGA, certain technical information may be processed as necessary to
          operate and secure the Service. Depending on the device and infrastructure involved,
          this may include IP address, device type, operating system, application version, network
          information, timestamps, technical identifiers, and information necessary for
          authentication, security, and operation of the Service.
        </P>
        <P>
          RINGA does not currently use third-party behavioral analytics or crash-reporting
          platforms such as Firebase Analytics, Firebase Crashlytics, or Sentry.
        </P>

        <H2>5. Permissions Used by RINGA</H2>
        <P>
          Depending on your device and the features you choose to use, RINGA may request access to
          location (including background location where authorized), camera, photo library, and
          notifications.
        </P>
        <P>
          Location is used for Nearby, location-based functionality, Live Activities, and related
          functionality. Camera access may be used for profile photographs and applicable QR
          scanning functionality. Photo-library access allows you to select profile photographs.
          Notification permission allows RINGA to deliver messages, Event notifications, Nearby
          notifications, Matches, Live Activities, and other relevant Service notifications.
        </P>
        <P>
          RINGA currently does not require access to your contacts, microphone, Bluetooth, NFC, or
          calendar for the ordinary operation of the Service.
        </P>

        <H2>6. How We Use Your Information</H2>
        <P>
          We may use personal information to create and maintain your account; provide and operate
          RINGA; operate Nearby and Events; display relevant profiles; facilitate user
          interactions, Matches, and communications; provide location-based functionality and Live
          Activities; send verification emails and Service notifications; maintain, troubleshoot,
          and secure the Service; investigate reports; enforce RINGA's rules; prevent harassment,
          abuse, spam, fraud, fake accounts, unauthorized activity, and other harmful conduct; and
          comply with applicable legal obligations and valid governmental or judicial requests.
        </P>

        <H2>7. Legal Bases for Processing</H2>
        <P>
          Where applicable privacy laws, including the GDPR, require us to identify a legal basis
          for processing personal information, we may rely on one or more of the following:
          performance of a contract, where processing is necessary to provide RINGA and requested
          functionality; consent, including for certain device permissions such as location
          access; legitimate interests, such as protecting users, preventing fraud and abuse,
          securing the Service, and enforcing our rules; and legal obligations, where processing
          or retention is required by applicable law or lawful requests.
        </P>

        <H2>8. How We Share Information</H2>
        <P>
          RINGA does not currently sell users' personal information to advertisers and does not
          currently share user information with third parties for targeted advertising.
          Information may nevertheless be disclosed to other users as part of the Service, to
          service providers that operate RINGA, for legal and safety purposes, or in connection
          with a business transaction as described below.
        </P>

        <H3>8.1 Other RINGA Users</H3>
        <P>
          Depending on your profile, settings, and use of the Service, other users may see your
          profile, profile photographs, username or name, age, biography, interests, Event
          participation, Likes or Matches where applicable, messages you send them, and other
          information you intentionally make available through RINGA. Although Nearby may indicate
          that users are in the same general area, RINGA does not display exact distance between
          users.
        </P>

        <H3>8.2 Service Providers</H3>
        <P>RINGA currently uses the following service providers to operate the Service:</P>
        <UL>
          <li>
            <Strong>Replit</Strong> - server hosting, database infrastructure, file
            infrastructure, and related backend operations.
          </li>
          <li>
            <Strong>Google Cloud Storage</Strong> - storage of profile photographs.
          </li>
          <li>
            <Strong>Resend</Strong> - account-verification emails.
          </li>
          <li>
            <Strong>Apple Push Notification service (APNs)</Strong> - notifications on supported
            Apple devices.
          </li>
          <li>
            <Strong>Expo Push Service</Strong> - push-notification infrastructure.
          </li>
          <li>
            <Strong>Firebase Cloud Messaging (FCM)</Strong> - notifications on Android devices.
          </li>
          <li>
            <Strong>Google Maps</Strong> - map functionality on Android devices.
          </li>
        </UL>
        <P>
          These providers may process limited information as necessary to provide their respective
          services to RINGA. Their processing may also be subject to their own privacy and
          security practices.
        </P>

        <H3>8.3 Legal and Safety Disclosures</H3>
        <P>
          We may disclose information where we reasonably believe doing so is necessary to comply
          with applicable law; respond to a valid court order, subpoena, or lawful governmental
          request; investigate illegal activity; protect the rights or safety of RINGA, our users,
          or others; detect or prevent fraud or security threats; enforce our Terms or Community
          Guidelines; or establish, exercise, or defend legal claims.
        </P>

        <H3>8.4 Business Transactions</H3>
        <P>
          If RINGA undergoes or considers a corporate transaction, such as incorporation,
          financing, investment, merger, acquisition, reorganization, sale of assets, or transfer
          of the Service, information associated with RINGA may be disclosed or transferred as part
          of that transaction, subject to applicable law.
        </P>

        <H2>9. International Data Transfers</H2>
        <P>
          RINGA and its service providers may process or store information in countries other than
          the country in which you live. This means that your information may be transferred
          internationally, including to countries whose data protection laws may differ from those
          in your jurisdiction. Where required by applicable law, we will use appropriate legal
          safeguards for international transfers of personal information.
        </P>

        <H2>10. Data Retention</H2>
        <P>
          We aim to retain personal information only for as long as reasonably necessary for the
          purposes described in this Privacy Policy. Different categories of information may have
          different retention periods.
        </P>
        <P>
          Account and profile information is generally retained while your RINGA account remains
          active and as necessary to provide the Service. Profile photographs are generally
          retained while associated with your account or until deleted or replaced, subject to
          limited technical backup retention.
        </P>
        <P>
          Unanswered messages may be automatically deleted after approximately 24 hours, and active
          chats may be automatically deleted following approximately 48 hours of inactivity.
        </P>
        <P>
          Information relating to reports, enforcement, fraud, abuse, or safety incidents may be
          retained for longer where reasonably necessary to protect users, prevent repeat
          violations, comply with legal obligations, or establish or defend legal claims.
        </P>
        <P>
          When you delete your RINGA account, information associated with the account is deleted
          from active systems, except where limited retention is necessary for legal, security,
          fraud-prevention, dispute-resolution, or technical purposes.
        </P>

        <H2>11. Backups</H2>
        <P>
          RINGA's database infrastructure is currently hosted through Replit. Backups may be
          created and maintained at the infrastructure-provider level. As a result, information
          deleted from RINGA's active systems may remain temporarily in secure technical backups
          until those backups are overwritten or deleted according to the hosting provider's
          backup lifecycle.
        </P>
        <P>
          We do not use backup copies to restore deleted user information to active use except
          where technically or legally necessary.
        </P>

        <H2>12. Account and Data Deletion</H2>
        <P>
          You can delete your RINGA account through the application. Account deletion is intended
          to delete the personal information associated with your account from RINGA's active
          systems, subject to the limited exceptions described in this Policy.
        </P>
        <P>
          You may also contact us regarding deletion of your personal information at <Mail />. We
          may need to verify your identity before processing certain privacy requests.
        </P>

        <H2>13. Accessing Your Information</H2>
        <P>
          Depending on where you live, you may have the right to request access to personal
          information RINGA holds about you. RINGA does not currently provide an automated
          "Download My Data" tool. However, where required by applicable law, you may request
          access to or a copy of your personal information by contacting <Mail />. We may request
          reasonable information necessary to verify your identity before responding.
        </P>

        <H2>14. Your Privacy Rights</H2>
        <P>
          Depending on your location and applicable law, you may have rights including the right to
          access your personal information; obtain information about how it is processed; correct
          inaccurate information; request deletion; request restriction of certain processing;
          object to certain processing; withdraw consent where processing relies on consent;
          receive certain information in a portable format; lodge a complaint with an applicable
          data protection authority; and exercise other privacy rights available under applicable
          law. These rights may be subject to legal exceptions.
        </P>
        <P>
          To submit a privacy request, contact <Mail />.
        </P>

        <H2>15. California Privacy Rights</H2>
        <P>
          If RINGA becomes subject to the California Consumer Privacy Act ("CCPA"), as amended,
          California residents may have additional rights concerning their personal information,
          including rights to know, delete, correct, opt out of certain sales or sharing, limit
          certain uses of sensitive personal information, and not be discriminated against for
          exercising applicable privacy rights.
        </P>
        <P>
          RINGA does not currently sell personal information and does not currently share personal
          information for cross-context behavioral advertising.
        </P>

        <H2>16. Cookies, Advertising and Tracking</H2>
        <P>
          The RINGA website does not currently use cookies for analytics or advertising purposes.
          RINGA does not currently use Google Analytics on its website. RINGA also does not
          currently use third-party advertising trackers in the application and does not share
          personal information with advertising companies for targeted advertising.
        </P>
        <P>
          If we introduce cookies, analytics, advertising technologies, or similar tracking
          functionality in the future, we will update our disclosures and, where required, provide
          appropriate choices or consent mechanisms.
        </P>

        <H2>17. Security</H2>
        <P>
          We use reasonable technical and organizational measures designed to protect personal
          information from unauthorized access, loss, misuse, alteration, or disclosure. These
          measures may include access controls, authentication mechanisms, and secure
          infrastructure provided by our hosting and cloud-service providers.
        </P>
        <P>
          However, no internet-based service, application, database, or electronic transmission can
          be guaranteed to be completely secure. Users are responsible for maintaining the
          confidentiality and security of their account credentials. If you believe your RINGA
          account or information may have been compromised, contact us at <Mail />.
        </P>

        <H2>18. Location Safety and Privacy</H2>
        <P>
          Because RINGA facilitates connections based partly on physical proximity, users should
          understand that location-based technology has inherent limitations. RINGA does not
          display another user's exact distance, does not guarantee that displayed availability
          reflects a user's exact current physical location, cannot guarantee the accuracy of GPS
          or device location information, cannot guarantee that a user shown as nearby remains
          nearby, and does not provide users with another person's precise coordinates through the
          ordinary Nearby experience.
        </P>

        <H2>19. Real-World Interactions</H2>
        <P>
          RINGA is designed to help facilitate connections between people and communities in the
          real world. However, RINGA does not control the behavior of users outside the Service.
          Users are responsible for deciding whether, when, and how to interact or meet with other
          users.
        </P>
        <P>
          RINGA does not guarantee the identity of every user; the accuracy of information provided
          by users; the intentions or behavior of users; the safety of a particular interaction;
          the availability of another user; that a Event or event will occur as described; or that
          another person shown through Nearby remains at the same location.
        </P>
        <P>
          Safety information and recommendations may be provided separately through RINGA's Safety
          Center or Community Guidelines.
        </P>

        <H2>20. Events and Third-Party Events</H2>
        <P>
          Some Events may relate to events, venues, communities, or activities operated by third
          parties. Unless expressly stated otherwise, RINGA does not organize, operate, or control
          third-party venues or events merely because a Event is available through RINGA.
        </P>
        <P>
          The relevant venue, organizer, or administrator may be responsible for its own event,
          physical premises, admission policies, activities, and conduct. RINGA's Privacy Policy
          governs RINGA's processing of information through the Service. A third-party event
          organizer or venue may separately process information under its own privacy practices
          where applicable.
        </P>

        <H2>21. Changes to This Privacy Policy</H2>
        <P>
          RINGA will continue to evolve, and this Privacy Policy may change from time to time. We
          may update this Policy to reflect new RINGA features, changes in how information is
          processed, new service providers, new payment or subscription functionality, changes to
          applicable law, security developments, or organizational changes, including incorporation
          of RINGA.
        </P>
        <P>
          When we make material changes, we may provide notice through the Service, by email,
          through the website, or by another appropriate method. The "Last Updated" date at the top
          of this Policy identifies when this version was most recently updated.
        </P>

        <H2>22. Future Paid Features</H2>
        <P>
          RINGA does not currently offer Premium subscriptions or in-app purchases. We may
          introduce Premium subscriptions, recurring subscriptions, one-time purchases, or other
          paid functionality in the future.
        </P>
        <P>
          If payment functionality is introduced, we may update this Privacy Policy to explain the
          information associated with purchases and the payment providers or application stores
          involved.
        </P>

        <H2>23. Contact Us</H2>
        <P>
          If you have questions about this Privacy Policy, RINGA's privacy practices, or your
          personal information, or if you would like to exercise an applicable privacy right,
          please contact:
        </P>
        <P>
          RINGA
          <br />
          Email: <Mail />
          <br />
          Website: {WEBSITE}
        </P>
      </>
    ),
  },
};

export default function Privacy() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  return (
    <LegalLayout title={c.title} subtitle={c.subtitle}>
      {c.body}
    </LegalLayout>
  );
}
