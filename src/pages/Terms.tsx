import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { H2, LegalLayout, P } from "../components/LegalPage";
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
    title: "תנאי שימוש",
    subtitle: "עודכן לאחרונה: 23 ביולי 2026",
    body: (
      <>
        <P>
          תנאים אלה מסדירים את הגישה והשימוש ב־RINGA, לרבות קרובים, אירועים, הודעות, פיצ'רים מבוססי
          מיקום והשירותים הקשורים אליהם.
        </P>

        <H2>1. קבלת תנאי השימוש</H2>
        <P>
          ברוכים הבאים ל־RINGA. תנאי שימוש אלה ("התנאים") מהווים הסכם מחייב ביניכם לבין RINGA
          ומסדירים את הגישה והשימוש שלכם באפליקציית RINGA, באתר {WEBSITE} ובשירותים, בפיצ'רים
          ובתכנים הקשורים אליהם (יחד: "השירות"). RINGA מופעלת כיום על ידי מייסדיה ועדיין אינה
          מאוגדת כישות משפטית נפרדת.
        </P>
        <P>
          ביצירת חשבון, בגישה לשירות או בשימוש בו, אתם מסכימים לתנאים אלה ומאשרים כי קראתם את
          מדיניות הפרטיות של RINGA ואת כללי הקהילה, הנחיות הבטיחות או תנאים נוספים החלים על פיצ'רים
          מסוימים. אם אינכם מסכימים לתנאים אלה, אל תיצרו חשבון ואל תשתמשו בשירות.
        </P>
        <P>
          אם בעתיד RINGA תופעל באמצעות ישות משפטית מאוגדת, תנאים אלה עשויים להתעדכן כך שהישות
          הרלוונטית של RINGA תהיה הצד המתקשר, בכפוף לדין החל.
        </P>

        <H2>2. זכאות לשימוש</H2>
        <P>
          עליכם להיות בני 18 לפחות כדי ליצור חשבון או להשתמש ב־RINGA. בשימוש בשירות אתם מצהירים כי
          אתם בני 18 לפחות, בעלי הכשירות המשפטית הנדרשת להתקשר בתנאים אלה ואינכם מנועים לפי דין
          מלהשתמש בשירות.
        </P>
        <P>
          עליכם למסור מידע אמיתי בנוגע לגילכם בעת ההרשמה. RINGA רשאית להשעות, להגביל או לסגור חשבון
          אם יש לנו יסוד סביר להאמין שהמשתמש מתחת לגיל 18 או שמסר מידע כוזב בנוגע לזכאותו לשימוש.
        </P>

        <H2>3. החשבון שלכם</H2>
        <P>
          RINGA משתמשת כיום בהרשמה באמצעות דוא"ל ובאימות דוא"ל. אתם אחראים למסירת מידע נכון ועדכני
          ולשמירה על סודיות ואבטחת פרטי הגישה לחשבון שלכם.
        </P>
        <P>
          אין ליצור חשבון עבור אדם אחר ללא הרשאה, להתחזות לאדם או לגוף אחר, להציג באופן מטעה את
          זהותכם או השתייכותכם, למכור או להעביר את החשבון שלכם, או לאפשר לאחר להשתמש בו באופן המפר
          תנאים אלה.
        </P>
        <P>
          בכפוף לדין החל, אתם אחראים לפעילות המתבצעת באמצעות חשבונכם. אם אתם סבורים שהחשבון נפרץ או
          נפגע, פנו אלינו בכתובת <Mail />.
        </P>

        <H2>4. שירות RINGA</H2>
        <P>
          RINGA היא פלטפורמה חברתית וקהילתית מבוססת מיקום, שנועדה לסייע לאנשים לגלות אנשים, קהילות,
          אירועים, אירועים והזדמנויות לאינטראקציה בעולם האמיתי הנמצאים בקרבתם.
        </P>
        <P>
          השירות עשוי לכלול קרובים, אירועים, גילוי פרופילים, Likes, Matches, הודעות, פונקציות
          מבוססות מיקום, Live Activities, התראות, בקרות פרטיות ופיצ'רים נוספים ש־RINGA עשויה
          להוסיף, לשנות או להסיר לאורך זמן.
        </P>
        <P>
          RINGA מספקת טכנולוגיה שמאפשרת גילוי ותקשורת. אלא אם RINGA מציינת במפורש אחרת, RINGA אינה
          המארגנת, הבעלים או המפעילה של מקום או אירוע המופעלים על ידי צד שלישי, ואינה מתחייבת
          שחיבור, Match, שיחה, מפגש, אירוע או אירוע כלשהם יתקיימו או יניבו תוצאה מסוימת.
        </P>

        <H2>5. קרובים ופיצ'רים מבוססי מיקום</H2>
        <P>
          קרובים עשוי להציג משתמשים הנמצאים ברדיוס מרבי של כ־200 מטר, נכון להיום. RINGA אינה מציגה
          במסגרת חוויית קרובים הרגילה את המרחק המדויק של משתמש אחר.
        </P>
        <P>
          נתוני מיקום עלולים להיות לא מדויקים, להתעכב או לא להיות זמינים עקב מגבלות GPS, הגדרות
          המכשיר, חיבור לרשת, התנהגות מערכת ההפעלה, תנועת המשתמש או גורמים אחרים שאינם בשליטת RINGA.
          אדם שמופיע ב־קרובים עשוי כבר לעבור למקום אחר, להפוך ללא זמין, לשנות את הגדרות הפרטיות שלו
          או להפעיל פיצ'ר המגביל את הנראות שלו.
        </P>
        <P>
          אין להשתמש ב־RINGA כדי לקבוע, להסיק, לעקוב אחר או לנסות להשיג את מיקומו המדויק של אדם אחר,
          או כדי לנטר אדם אחר ללא ידיעתו או הסכמתו.
        </P>
        <P>
          פיצ'רים מסוימים התלויים במיקום עשויים לדרוש הרשאת מיקום בזמן השימוש או ברקע. ניתן לשנות
          את הרשאות המכשיר, אך שינוי כזה עשוי להגביל או להשבית פיצ'רים רלוונטיים.
        </P>

        <H2>6. Ghost Mode ובקרות פרטיות</H2>
        <P>
          RINGA עשויה לספק Ghost Mode או אמצעים אחרים לשליטה בנראות ובפרטיות המיקום. אמצעים אלה
          עשויים להגביל את האפשרות של משתמשים אחרים לגלות או לראות אתכם באמצעות פיצ'רים מסוימים.
        </P>
        <P>
          בקרות פרטיות אינן מונעות בהכרח מ־RINGA לעבד מידע הנדרש להפעלת פונקציונליות שביקשתם,
          לשמירה על אבטחה, לאכיפת תנאים אלה או לעמידה בדרישות הדין. ההשפעה המדויקת של כל בקרת פרטיות
          נקבעת בהתאם לאופן שבו הפיצ'ר מוצג בשירות באותו מועד.
        </P>

        <H2>7. אירועים</H2>
        <P>
          אירועים הם מרחבים בתוך RINGA שעשויים להיות קשורים לאירוע, מקום, קהילה, פעילות או חוויה
          מוגדרת אחרת. אירוע עשוי להיות פרטי או להיות מוגדר באופן אחר על ידי מנהל ה־אירוע.
        </P>
        <P>
          משתמשים עשויים להצטרף ל־אירוע באמצעות קוד QR, קישור הזמנה או דרך אחרת ש־RINGA מעמידה
          לרשותם. גישה לקוד QR או לקישור אינה מקנה זכות כניסה למקום פיזי או לאירוע, ו־RINGA אינה
          מתחייבת ש־אירוע, מקום או אירוע יישארו זמינים.
        </P>
        <P>
          משך הפעילות והזמינות של אירוע נקבעים בהתאם להגדרותיו. ההשתתפות ב־אירוע עשויה להימשך למשך
          התקופה שהוגדרה גם אם המשתתף עזב את המיקום הפיזי, בכפוף לפונקציונליות השירות ולהגדרות
          הרלוונטיות.
        </P>

        <H2>8. מנהלי אירועים ויוצרים מורשים</H2>
        <P>
          רק מנהלי RINGA או אנשים שקיבלו הרשאה מפורשת מ־RINGA רשאים ליצור אירועים. הרשאה ליצור או
          לנהל אירועים היא מוגבלת וניתנת לביטול, ואינה מעבירה בעלות בפלטפורמת RINGA או בקניין הרוחני
          שלה.
        </P>
        <P>
          מנהל אירוע או יוצר מורשה נדרש למסור מידע מדויק באופן סביר, לא להציג באופן מטעה אירוע או
          מקום, ולא להשתמש ב־אירוע לצורך פעילות בלתי חוקית, מטעה, מסוכנת או אסורה.
        </P>
        <P>
          RINGA רשאית להגביל, לשנות, להשעות או לסגור אירוע, לבטל הרשאות ליצירת אירועים או לנקוט פעולה
          נגד חשבון כאשר הדבר נדרש באופן סביר לצורכי בטיחות, אבטחה, ציות לדין, אכיפת תנאים אלה או
          הגנה על השירות ומשתמשיו.
        </P>

        <H2>9. קודי QR וקישורי הזמנה</H2>
        <P>
          קודי QR וקישורי הזמנה הם אמצעי גישה ועשויים להיות מיועדים לאירוע, לקהל, לזמן או למטרה
          מסוימים. אין לשנות, לזייף, לנצל או להפיץ אמצעי גישה ל־אירוע באופן שנועד לעקוף הגבלות,
          להטעות משתמשים, להעמיס על השירות או לאפשר גישה בלתי מורשית.
        </P>
        <P>
          RINGA רשאית להשבית או להחליף אמצעי גישה כאשר מזוהים שימוש לרעה, פגיעה באבטחה או חשש
          אבטחתי.
        </P>

        <H2>10. Likes, Matches ותקשורת</H2>
        <P>
          RINGA עשויה לאפשר למשתמשים להביע עניין באמצעות Likes, ובהקשרים מסוימים כגון אירועים עשויה
          לאפשר Match כאשר מתקיימים התנאים הרלוונטיים לאינטראקציה. הזמינות והכללים של Likes,
          Matches והודעות עשויים להשתנות בין פיצ'רים.
        </P>
        <P>
          Like, Match או הודעה אינם מהווים אימות, המלצה, התאמה, הבטחת בטיחות או חובה להשיב, להיפגש
          או להמשיך בתקשורת.
        </P>
        <P>
          אין לשלוח ספאם, הודעות בלתי רצויות חוזרות, איומים, הטרדות, פניות הונאתיות, מסרים מסחריים
          מטעים או תקשורת אחרת האסורה לפי תנאים אלה או כללי הקהילה של RINGA.
        </P>

        <H2>11. הודעות ומחיקה אוטומטית</H2>
        <P>
          RINGA תומכת כיום בצ'אט מבוסס טקסט ואינה מאפשרת כיום לשלוח תמונות, סרטונים או קבצים
          באמצעות הצ'אט.
        </P>
        <P>
          הודעות שלא קיבלו מענה עשויות להימחק אוטומטית לאחר כ־24 שעות, וצ'אטים פעילים עשויים להימחק
          אוטומטית לאחר כ־48 שעות של חוסר פעילות. פונקציות המחיקה הזמינות עשויות גם לאפשר למשתמשים
          למחוק הודעות או שיחות.
        </P>
        <P>
          אין להסתמך על RINGA כאמצעי אחסון קבוע להודעות או למידע. RINGA אינה מתחייבת שניתן יהיה
          לשחזר הודעות שנמחקו או פגו. עותקים מוגבלים עשויים להישאר באופן זמני בגיבויי תשתית כמפורט
          במדיניות הפרטיות.
        </P>

        <H2>12. תוכן משתמשים</H2>
        <P>
          "תוכן משתמשים" הוא מידע או חומר שאתם מוסרים, מעלים, מפרסמים, מציגים, מעבירים או הופכים
          לזמינים בדרך אחרת באמצעות השירות, לרבות מידע בפרופיל, תמונות פרופיל, טקסט ביוגרפי, הודעות,
          דיווחים ותוכן הקשור ל־אירועים.
        </P>
        <P>
          אתם שומרים על הבעלות בתוכן משתמשים השייך לכם. אתם אחראים לתוכן שלכם ומצהירים שיש לכם את
          הזכויות וההרשאות הדרושות למסירתו וכי הדבר אינו מפר דין, תנאים אלה או זכויות של אדם אחר.
        </P>
        <P>
          אין להעלות או לשתף תוכן המפר זכויות יוצרים, סימני מסחר, פרטיות, זכות לפרסום או זכויות
          אחרות; מכיל חומר בלתי חוקי או אסור; מתחזה לאדם אחר; הונאתי או מטעה; או נועד להטריד, לנצל
          או לפגוע באחרים.
        </P>

        <H2>13. הרישיון שאתם מעניקים ל־RINGA</H2>
        <P>
          לצורך הפעלת השירות, אתם מעניקים ל־RINGA רישיון לא בלעדי, כלל־עולמי, ללא תמלוגים, הניתן
          לרישוי משנה ולהעברה, לארח, לאחסן, לשכפל, להציג, לעצב, להתאים ולעבד בדרך אחרת את תוכן
          המשתמשים שלכם, אך ורק ככל שנדרש באופן סביר לצורך הפעלה, אספקה, אבטחה, ניהול תוכן, שיפור
          וקידום השירות, בכפוף למדיניות הפרטיות ולדין החל.
        </P>
        <P>
          רישיון זה אינו מעביר ל־RINGA את הבעלות בתוכן שלכם. הוא מסתיים כאשר תוכן המשתמש הרלוונטי
          נמחק מהמערכות הפעילות של RINGA, למעט במידה שבה המשך עיבוד או שמירה נדרשים באופן סביר
          לצורכי גיבוי, ציות לדין, בטיחות, מניעת הונאה, יישוב מחלוקות, אכיפה או הגנה על זכויות, או
          כאשר התוכן שותף עם אחרים ונשמר אצלם כדין.
        </P>

        <H2>14. שימוש מותר</H2>
        <P>
          ניתן להשתמש ב־RINGA רק למטרות חוקיות, אישיות ולגיטימיות בעלות אופי חברתי או קהילתי, בהתאם
          לאופי השירות. אתם מתחייבים להתייחס בכבוד למשתמשים אחרים ולציית לתנאים אלה, לכללי הקהילה,
          להנחיות הבטיחות ולדין החל.
        </P>
        <P>
          אם אתם משתמשים ב־RINGA בשם אירוע, מקום, קהילה או ארגון אחר, אתם מצהירים שיש לכם סמכות
          לפעול בשם אותו גוף ככל שהדבר רלוונטי לשימושכם.
        </P>

        <H2>15. התנהגות אסורה</H2>
        <P>
          אין להשתמש בשירות כדי להטריד, לאיים, להפחיד, לעקוב באופן מטריד, לנצל או להונות אדם אחר;
          להתחזות לאדם או לגוף אחר; ליצור חשבונות מזויפים או מטעים; לבקש כסף באמצעות הונאה; לשלוח
          ספאם או תקשורת מסחרית בלתי מורשית; לקדם פעילות בלתי חוקית; להפיץ קוד זדוני; לבצע scraping,
          crawling, harvesting או איסוף שיטתי של מידע מהשירות ללא הרשאה; לבצע הנדסה לאחור או לנסות
          לחלץ קוד מקור, למעט כאשר הדין מתיר זאת במפורש; להפריע למנגנוני אבטחה או בקרת גישה; לעקוף
          השעיה או חסימה; לעשות שימוש לרעה במידע מיקום; או לעודד אדם אחר להפר תנאים אלה.
        </P>
        <P>
          אין להשתמש בתוכן RINGA, בפרופילים, בתמונות או בנתוני משתמשים כדי לבנות מאגר מתחרה, לאמן או
          לפתח מודל או מערכת אוטומטית, לבצע זיהוי פנים או ניתוח ביומטרי בלתי מורשים, או לזהות או
          לאפיין משתמשים מחוץ למטרות שלשמן השירות מעמיד את המידע לרשותכם, אלא אם RINGA אישרה זאת
          במפורש ובכתב או שהדין מחייב אחרת.
        </P>

        <H2>16. בטיחות ואינטראקציות בעולם האמיתי</H2>
        <P>
          RINGA מאפשרת היכרות ואינטראקציה אך אינה שולטת בהתנהגות המשתמשים בעולם האמיתי. אתם אחראים
          להחלטותיכם בנוגע לשאלה האם, מתי וכיצד לתקשר עם משתמש אחר או להיפגש עמו.
        </P>
        <P>
          אלא אם צוין במפורש אחרת, RINGA אינה מבצעת בדיקות רקע פליליות לכל משתמש ואינה מתחייבת
          לזהותו של משתמש, לגילו מעבר למידע ולאמצעי הבקרה שבהם משתמש השירות, לכוונותיו, להצהרותיו,
          להתנהגותו, לבטיחותו או להתאמתו.
        </P>
        <P>
          יש להפעיל שיקול דעת מתאים בעת מפגש או אינטראקציה עם אנשים שהתגלו באמצעות RINGA. פעלו בהתאם
          להנחיות הבטיחות של RINGA, שמרו על מידע אישי והשתמשו בכלי Report ו־Block לפי הצורך. במקרה
          חירום או כאשר קיימת סכנה מיידית לבטיחות פיזית, יש לפנות לשירותי החירום המקומיים המתאימים
          ולא להסתמך על RINGA.
        </P>

        <H2>17. דיווחים, חסימות וניהול תוכן</H2>
        <P>
          RINGA מספקת כלי דיווח וחסימה. דיווחים עשויים להיבדק על ידי מנהל RINGA מורשה. RINGA עשויה
          גם להשתמש במערכות טכנולוגיות או אוטומטיות כדי לסייע בזיהוי פעילות או תוכן שעלולים להיות
          פוגעניים, מזיקים, הונאתיים או אסורים.
        </P>
        <P>
          RINGA רשאית לבדוק דיווחים ולהזהיר, להגביל, להשעות או לסגור חשבונות; להסיר או להגביל תוכן;
          להגביל פיצ'רים; לסגור אירועים; או לנקוט פעולה סבירה אחרת בהתאם לנסיבות. RINGA אינה מחויבת
          לחשוף שיטות ניהול תוכן חסויות, מידע בטיחות פנימי, מידע על משתמש אחר או מידע שחשיפתו עלולה
          לפגוע באבטחה או בפרטיות.
        </P>
        <P>
          חסימה עשויה למנוע ממשתמשים לראות או ליצור אינטראקציה זה עם זה בחלקים הרלוונטיים של השירות.
          RINGA אינה יכולה להבטיח שחסימה תמנע כל קשר מחוץ ל־RINGA.
        </P>

        <H2>18. השעיה וסיום השימוש</H2>
        <P>
          ניתן להפסיק להשתמש ב־RINGA בכל עת ולמחוק את החשבון מתוך האפליקציה, בכפוף למדיניות
          הפרטיות.
        </P>
        <P>
          RINGA רשאית להשעות, להגביל או לסיים את גישתכם, עם או בלי הודעה מוקדמת כאשר הדבר מותר לפי
          דין, אם יש לנו יסוד סביר להאמין שהפרתם תנאים אלה או כללים החלים על השירות, יצרתם סיכון או
          חשיפה משפטית אפשרית, עסקתם בהונאה או בשימוש לרעה, איימתם על בטיחות המשתמשים או השירות,
          ניסיתם לעקוף פעולת אכיפה, או כאשר ההשעיה נדרשת באופן סביר להגנת RINGA או אחרים.
        </P>
        <P>
          כאשר הדין החל מחייב הודעה, הסבר, זכות ערעור או הליך אחר, RINGA תספק את ההליך הנדרש לפי אותו
          דין.
        </P>

        <H2>19. אירועים, מקומות ומארגנים מצד שלישי</H2>
        <P>
          אירוע עשוי להיות קשור לאירוע, מקום, מארגן, עסק, קהילה או פעילות המופעלים על ידי צד שלישי.
          אלא אם RINGA מציינת במפורש שהיא המארגנת, הצד השלישי - ולא RINGA - אחראי למתחם הפיזי,
          להחלטות כניסה, להפעלת האירוע, לצוות, למוצרים, לשירותים, לפעילויות ולחובות הציות שלו.
        </P>
        <P>
          RINGA אינה מתחייבת שאירוע יתקיים, שמידע שסיפק מארגן מלא או מדויק, או שמקום מסוים בטוח או
          מתאים. עסקה או הסדר נפרדים ביניכם לבין מארגן צד שלישי הם ביניכם לבין אותו צד שלישי, אלא
          במידה שבה RINGA משתתפת במפורש בעסקה.
        </P>

        <H2>20. קניין רוחני</H2>
        <P>
          השירות, לרבות השם RINGA, הלוגואים, המיתוג, התוכנה, קוד המקור וקוד האובייקט, הממשק,
          העיצובים, הגרפיקה, מאגרי המידע, הפיצ'רים, הפונקציונליות, התיעוד והתוכן שנוצר על ידי RINGA,
          שייכים ל־RINGA או ניתנים לה ברישיון ומוגנים לפי דיני הקניין הרוחני החלים.
        </P>
        <P>
          בכפוף לתנאים אלה, RINGA מעניקה לכם זכות מוגבלת, אישית, ניתנת לביטול, לא בלעדית, בלתי ניתנת
          להעברה ובלתי ניתנת לרישוי משנה לגשת לשירות ולהשתמש בו למטרותיו המיועדות. לא מוענקות זכויות
          נוספות.
        </P>
        <P>
          אין להעתיק, לשכפל, לשנות, להפיץ, למכור, להעניק רישיון, לנצל או ליצור יצירות נגזרות מהקניין
          הרוחני של RINGA, אלא אם RINGA אישרה זאת במפורש או שהדין מתיר זאת.
        </P>

        <H2>21. שירותי צד שלישי</H2>
        <P>
          RINGA מסתמכת על תשתיות ושירותי צד שלישי לצורך פעילותה, אשר עשויים לכלול כיום את Replit,
          Google Cloud Storage, Resend, Apple Push Notification service, Expo Push Service,
          Firebase Cloud Messaging ו־Google Maps במכשירי Android. השימוש בשירותי מכשיר או פלטפורמה
          מסוימים עשוי להיות כפוף גם לתנאי הספק הרלוונטי.
        </P>
        <P>
          RINGA אינה אחראית לשירות צד שלישי במידה שהבעיה נגרמה על ידי אותו ספק עצמאי והיא מחוץ
          לשליטתה הסבירה של RINGA, והכול בכפוף לזכויות שלא ניתן לשלול לפי הדין החל.
        </P>

        <H2>22. פיצ'רי Premium ורכישות עתידיות</H2>
        <P>
          RINGA אינה מציעה כיום מנויי Premium בתשלום או רכישות בתוך האפליקציה. RINGA עשויה להוסיף
          בעתיד מנויים, רכישות חד־פעמיות או פיצ'רים אחרים בתשלום.
        </P>
        <P>
          לפני שפונקציונליות בתשלום תהיה זמינה, RINGA עשויה לקבוע תנאים נוספים בנוגע לרכישה, חידוש,
          ביטול, החזר כספי וחיוב. רכישות באמצעות Apple App Store או Google Play עשויות להיות כפופות
          גם לכללי התשלום והמנויים של החנות הרלוונטית. אין בתנאים אלה כדי לגרוע מזכויות צרכניות
          מחייבות.
        </P>

        <H2>23. תנאי חנויות אפליקציות ופלטפורמות</H2>
        <P>
          אם הורדתם את RINGA או אתם משתמשים בה באמצעות חנות אפליקציות או פלטפורמה של צד שלישי,
          השימוש עשוי להיות כפוף גם לתנאים הרלוונטיים של אותה פלטפורמה. תנאים אלה הם ביניכם לבין
          RINGA ולא ביניכם לבין מפעיל חנות האפליקציות, למעט זכויות שעשויות להיות לפלטפורמה מכוח
          תנאיה.
        </P>
        <P>אין בתנאים אלה כוונה לגבור על כללי פלטפורמה מחייבים או על הדין החל.</P>

        <H2>24. שינויים בשירות</H2>
        <P>
          RINGA היא מוצר מתפתח. אנו עשויים להוסיף, לשנות, לבדוק, להשעות או להפסיק פיצ'רים, לשנות
          דרישות טכניות, להתאים מגבלות או לעצב מחדש חלקים מהשירות. הדבר עשוי להיעשות לצורך שיפור
          המוצר, מענה לדרישות בטיחות או דין, טיפול בבעיות טכניות או התאמת המודל העסקי.
        </P>
        <P>
          כאשר שינוי משפיע באופן מהותי על זכויות בתשלום או כאשר הדין מחייב הודעה מוקדמת, נספק את
          ההודעה או הסעד הנדרשים לפי דין.
        </P>

        <H2>25. זמינות השירות ומגבלות מיקום</H2>
        <P>
          השירות עשוי להיקטע, להתעכב, להיות בלתי זמין או לכלול שגיאות. RINGA אינה מתחייבת לזמינות
          רציפה, לכך שכל פיצ'ר יעבוד בכל מכשיר, לכך שיהיו משתמשים ברדיוס מסוים, לכך שיהיו משתתפים
          ב־אירוע או לכך שמידע מיקום יהיה תמיד מדויק או עדכני.
        </P>
        <P>
          תחזוקה, תקלות רשת, השבתות של ספקי צד שלישי, הגדרות מכשיר, מגבלות מערכת הפעלה, אירועי כוח
          עליון ונסיבות אחרות עשויים להשפיע על הזמינות.
        </P>

        <H2>26. הסתייגות מאחריות והתחייבויות</H2>
        <P>
          במידה המרבית המותרת לפי הדין החל, השירות מסופק "כמות שהוא" (AS IS) ו"כפי שהוא זמין" (AS
          AVAILABLE). RINGA מתנערת מהתחייבויות שניתן לשלול כדין, לרבות התחייבויות משתמעות בדבר
          סחירות, התאמה למטרה מסוימת, אי־הפרה והנאה שקטה.
        </P>
        <P>
          RINGA אינה מתחייבת שהשירות יהיה רציף, נקי משגיאות או מאובטח; שמידע המיקום יהיה מדויק;
          שמשתמשים הם מי שהם טוענים שהם; שתוכן משתמשים מדויק; או שאינטראקציה, Match, אירוע, אירוע או
          מפגש בעולם האמיתי יהיו בטוחים, מוצלחים או מתאימים.
        </P>
        <P>אין בתנאים אלה כדי לשלול אחריות, התחייבות או זכות צרכנית שלא ניתן לשלול כדין.</P>

        <H2>27. הגבלת אחריות</H2>
        <P>
          במידה המרבית המותרת לפי הדין החל, RINGA והאנשים המעורבים בהפעלת השירות לא יהיו אחראים
          לנזקים עקיפים, מקריים, מיוחדים, תוצאתיים, לדוגמה או עונשיים, או לאובדן רווחים, הכנסות,
          נתונים, מוניטין או הזדמנות עסקית, הנובעים מהשירות או קשורים אליו, גם אם נמסר להם על
          האפשרות לנזקים כאלה.
        </P>
        <P>
          במידה המרבית המותרת לפי דין, RINGA אינה אחראית להתנהגותם של משתמשים או מארגני אירועים מצד
          שלישי, או לאינטראקציות בין משתמשים מחוץ לשירות או בעולם האמיתי, למעט כאשר לא ניתן לשלול
          אחריות זו כדין.
        </P>
        <P>
          בכפוף לדין מחייב, האחריות המצטברת של RINGA בגין תביעות הנובעות מהשירות החינמי לא תעלה על
          הגבוה מבין הסכום ששילמתם ישירות ל־RINGA עבור השירות במהלך 12 החודשים שקדמו לאירוע שהוביל
          לתביעה לבין 100 דולר ארה"ב או שווה ערך במטבע המקומי. מגבלה זו אינה חלה כאשר הדין אוסר
          עליה.
        </P>

        <H2>28. שיפוי</H2>
        <P>
          במידה המותרת לפי הדין החל, אתם מסכימים לשפות ולהגן על RINGA ועל האנשים המעורבים בהפעלת
          השירות מפני תביעות של צדדים שלישיים, חבויות, נזקים, הפסדים ועלויות סבירות הנובעים משימוש
          בלתי חוקי שלכם בשירות, מהפרה מהותית של תנאים אלה, מתוכן המשתמשים שלכם או מהפרת זכויותיו של
          אדם אחר.
        </P>
        <P>
          סעיף זה אינו מחייב צרכן לשפות את RINGA בגין התנהלות בלתי חוקית של RINGA עצמה או בכל עניין
          שבו לא ניתן לדרוש שיפוי כדין.
        </P>

        <H2>29. פרטיות</H2>
        <P>
          האיסוף, השימוש, השיתוף והשמירה של מידע אישי על ידי RINGA מתוארים ב
          <Link to="/privacy" className="text-purple hover:text-coral">
            מדיניות הפרטיות
          </Link>{" "}
          של RINGA. מדיניות הפרטיות היא חלק חשוב מהבנת אופן פעולת השירות, אך אינה גורעת מזכויות
          המוקנות לכם לפי דיני הגנת מידע החלים.
        </P>

        <H2>30. הדין החל ויישוב מחלוקות</H2>
        <P>
          מכיוון ש־RINGA מופעלת כיום מישראל ועדיין אינה מאוגדת, תנאים אלה כפופים לדיני מדינת ישראל,
          מבלי לגרוע מזכויות צרכניות מחייבות או מדינים מחייבים אחרים החלים עליכם בהתאם למקום
          מגוריכם.
        </P>
        <P>
          לפני פתיחת הליך פורמלי, אתם ו־RINGA מוזמנים, כאשר הדבר מתאים, לנסות לפתור מחלוקת באמצעות
          פנייה ל־<Mail /> בצירוף תיאור הבעיה. הליך בלתי פורמלי זה אינו מונע מאף צד לבקש סעד דחוף או
          לממש זכויות שלא ניתן להגביל כדין.
        </P>
        <P>
          מחלוקת שלא נפתרה באופן בלתי פורמלי יכולה להיות מובאת בפני בית משפט בעל סמכות בהתאם לדין
          החל. תנאים אלה אינם מטילים כיום בוררות חובה או ויתור על תובענה ייצוגית.
        </P>

        <H2>31. שינויים בתנאים אלה</H2>
        <P>
          אנו עשויים לעדכן תנאים אלה עם התפתחות RINGA, לרבות כדי לשקף פיצ'רים חדשים, שירותים
          בתשלום, דרישות משפטיות, נהלי בטיחות, שינויים ארגוניים או התאגדות.
        </P>
        <P>
          אם נבצע שינוי מהותי, אנו עשויים למסור הודעה באמצעות השירות, בדוא"ל, באתר או בדרך מתאימה
          אחרת. כאשר הדין מחייב זאת, השינויים ייכנסו לתוקף רק לאחר ההודעה או ההסכמה הנדרשות.
        </P>

        <H2>32. הוראות כלליות</H2>
        <P>
          אם הוראה כלשהי בתנאים אלה תיקבע כבלתי ניתנת לאכיפה, יתר ההוראות ימשיכו לחול במידה המותרת
          לפי דין, וההוראה הרלוונטית תפורש או תוגבל ככל שנדרש כדי להפוך אותה לניתנת לאכיפה, כאשר
          הדבר מותר.
        </P>
        <P>
          אי־אכיפה של הוראה מצד RINGA אינה מהווה ויתור עליה. אינכם רשאים להמחות או להעביר את
          זכויותיכם או חובותיכם לפי תנאים אלה ללא הסכמת RINGA, אלא כאשר הדין מעניק לכם זכות זו. RINGA
          רשאית להעביר תנאים אלה במסגרת התאגדות, מימון, ארגון מחדש, מיזוג, רכישה, מכירת נכסים או
          העברת השירות, בכפוף לדין החל.
        </P>
        <P>
          הכותרות נועדו לנוחות בלבד. תנאים אלה, יחד עם מדיניות ותנאים נוספים המשולבים בהם במפורש,
          מהווים את ההסכם המסדיר את השימוש שלכם בשירות, למעט כאשר דין מחייב קובע אחרת.
        </P>

        <H2>33. יצירת קשר</H2>
        <P>לשאלות בנוגע לתנאים אלה ניתן לפנות אלינו:</P>
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
    title: "Terms of Use",
    subtitle: "Last Updated: July 23, 2026",
    body: (
      <>
        <P>
          These Terms govern access to and use of RINGA, including Nearby, Events, messaging,
          location-based features and related services.
        </P>

        <H2>1. Acceptance of Terms</H2>
        <P>
          Welcome to RINGA. These Terms of Use (the "Terms") constitute a binding agreement
          between you and RINGA and govern your access to and use of the RINGA application, the
          website {WEBSITE}, and the related services, features and content (collectively, the
          "Service"). RINGA is currently operated by its founders and has not yet been incorporated
          as a separate legal entity.
        </P>
        <P>
          By creating an account, accessing, or using the Service, you agree to these Terms and
          confirm that you have read RINGA's Privacy Policy and the Community Guidelines, Safety
          Guidelines, or additional terms that apply to certain features. If you do not agree to
          these Terms, do not create an account and do not use the Service.
        </P>
        <P>
          If in the future RINGA is operated through an incorporated legal entity, these Terms may
          be updated so that the relevant RINGA entity is the contracting party, subject to
          applicable law.
        </P>

        <H2>2. Eligibility</H2>
        <P>
          You must be at least 18 years old to create an account or use RINGA. By using the
          Service you represent that you are at least 18 years old, have the legal capacity
          required to enter into these Terms, and are not barred by law from using the Service.
        </P>
        <P>
          You must provide truthful information about your age when registering. RINGA may suspend,
          restrict, or close an account if we have a reasonable basis to believe that the user is
          under 18 or has provided false information regarding their eligibility to use the
          Service.
        </P>

        <H2>3. Your Account</H2>
        <P>
          RINGA currently uses email-based registration and email verification. You are responsible
          for providing accurate, up-to-date information and for maintaining the confidentiality
          and security of your account credentials.
        </P>
        <P>
          You may not create an account for another person without authorization, impersonate any
          person or entity, misrepresent your identity or affiliation, sell or transfer your
          account, or allow another person to use it in a manner that violates these Terms.
        </P>
        <P>
          Subject to applicable law, you are responsible for the activity that takes place through
          your account. If you believe your account has been breached or compromised, contact us at{" "}
          <Mail />.
        </P>

        <H2>4. RINGA Service</H2>
        <P>
          RINGA is a location-based social and community platform designed to help people discover
          people, communities, Events, events, and opportunities for interaction in the real world
          that are near them.
        </P>
        <P>
          The Service may include Nearby, Events, profile discovery, Likes, Matches, messaging,
          location-based functions, Live Activities, notifications, privacy controls, and other
          features that RINGA may add, change, or remove over time.
        </P>
        <P>
          RINGA provides technology that enables discovery and communication. Unless RINGA
          expressly states otherwise, RINGA is not the organizer, owner, or operator of a
          third-party venue or event, and does not guarantee that any connection, Match,
          conversation, meeting, Event, or event will occur or produce any particular outcome.
        </P>

        <H2>5. Nearby and Location-Based Features</H2>
        <P>
          Nearby may show users located within a maximum radius of approximately 200 meters, as of
          today. RINGA does not display another user's exact distance within the ordinary Nearby
          experience.
        </P>
        <P>
          Location data may be inaccurate, delayed, or unavailable due to GPS limitations, device
          settings, network connectivity, operating-system behavior, user movement, or other
          factors outside RINGA's control. A person shown in Nearby may already have moved
          elsewhere, become unavailable, changed their privacy settings, or activated a feature
          that limits their visibility.
        </P>
        <P>
          You may not use RINGA to determine, infer, track, or attempt to obtain another person's
          exact location, or to monitor another person without their knowledge or consent.
        </P>
        <P>
          Certain location-dependent features may require location permission while in use or in
          the background. You can change your device permissions, but doing so may limit or disable
          relevant features.
        </P>

        <H2>6. Ghost Mode and Privacy Controls</H2>
        <P>
          RINGA may provide Ghost Mode or other means of controlling your visibility and location
          privacy. These measures may limit the ability of other users to discover or see you
          through certain features.
        </P>
        <P>
          Privacy controls do not necessarily prevent RINGA from processing information necessary
          to operate functionality you requested, maintain security, enforce these Terms, or comply
          with legal requirements. The exact effect of each privacy control is determined by how
          the feature is presented in the Service at that time.
        </P>

        <H2>7. Events</H2>
        <P>
          Events are spaces within RINGA that may be related to an event, venue, community,
          activity, or other defined experience. A Event may be private or configured otherwise by
          the Event administrator.
        </P>
        <P>
          Users may join a Event through a QR code, an invite link, or another method made available
          by RINGA. Access to a QR code or link does not grant a right of entry to a physical venue
          or event, and RINGA does not guarantee that a Event, venue, or event will remain
          available.
        </P>
        <P>
          The duration and availability of a Event are determined by its configuration.
          Participation in a Event may continue for the defined period even if the participant has
          left the physical location, subject to Service functionality and the relevant settings.
        </P>

        <H2>8. Event Administrators and Authorized Creators</H2>
        <P>
          Only RINGA administrators or individuals who have received express authorization from
          RINGA may create Events. Permission to create or manage Events is limited and revocable,
          and does not transfer ownership of the RINGA platform or its intellectual property.
        </P>
        <P>
          A Event administrator or authorized creator is required to provide reasonably accurate
          information, not to misrepresent an event or venue, and not to use a Event for illegal,
          misleading, dangerous, or prohibited activity.
        </P>
        <P>
          RINGA may restrict, change, suspend, or close a Event, revoke permissions to create Events,
          or take action against an account where reasonably necessary for safety, security, legal
          compliance, enforcement of these Terms, or protection of the Service and its users.
        </P>

        <H2>9. QR Codes and Invite Links</H2>
        <P>
          QR codes and invite links are access mechanisms and may be intended for a specific event,
          audience, time, or purpose. You may not modify, forge, exploit, or distribute a Event
          access mechanism in a manner intended to bypass restrictions, mislead users, burden the
          Service, or enable unauthorized access.
        </P>
        <P>
          RINGA may disable or replace an access mechanism where misuse, a security compromise, or
          a security concern is identified.
        </P>

        <H2>10. Likes, Matches and Communication</H2>
        <P>
          RINGA may allow users to express interest through Likes, and in certain contexts such as
          Events may enable a Match when the relevant conditions for interaction are met. The
          availability and rules of Likes, Matches, and messages may vary between features.
        </P>
        <P>
          A Like, Match, or message does not constitute verification, endorsement, compatibility, a
          safety guarantee, or an obligation to reply, meet, or continue communicating.
        </P>
        <P>
          You may not send spam, repeated unwanted messages, threats, harassment, fraudulent
          solicitations, misleading commercial messages, or other communication prohibited by these
          Terms or RINGA's Community Guidelines.
        </P>

        <H2>11. Messages and Automatic Deletion</H2>
        <P>
          RINGA currently supports text-based chat and does not currently allow sending photos,
          videos, or files through the chat.
        </P>
        <P>
          Messages that do not receive a response may be automatically deleted after approximately
          24 hours, and active chats may be automatically deleted after approximately 48 hours of
          inactivity. Available deletion functions may also allow users to delete messages or
          conversations.
        </P>
        <P>
          Do not rely on RINGA as a permanent means of storing messages or information. RINGA does
          not guarantee that deleted or expired messages can be recovered. Limited copies may
          remain temporarily in infrastructure backups as described in the Privacy Policy.
        </P>

        <H2>12. User Content</H2>
        <P>
          "User Content" is information or material you submit, upload, publish, display, transmit,
          or otherwise make available through the Service, including profile information, profile
          photos, biography text, messages, reports, and Event-related content.
        </P>
        <P>
          You retain ownership of the User Content that belongs to you. You are responsible for
          your content and represent that you have the rights and permissions necessary to provide
          it and that doing so does not violate the law, these Terms, or another person's rights.
        </P>
        <P>
          You may not upload or share content that infringes copyright, trademarks, privacy, the
          right of publicity, or other rights; contains illegal or prohibited material; impersonates
          another person; is fraudulent or misleading; or is intended to harass, exploit, or harm
          others.
        </P>

        <H2>13. The License You Grant RINGA</H2>
        <P>
          To operate the Service, you grant RINGA a non-exclusive, worldwide, royalty-free,
          sublicensable and transferable license to host, store, reproduce, display, format, adapt,
          and otherwise process your User Content, solely to the extent reasonably necessary to
          operate, provide, secure, moderate, improve, and promote the Service, subject to the
          Privacy Policy and applicable law.
        </P>
        <P>
          This license does not transfer ownership of your content to RINGA. It terminates when the
          relevant User Content is deleted from RINGA's active systems, except to the extent that
          continued processing or retention is reasonably necessary for backup, legal compliance,
          safety, fraud prevention, dispute resolution, enforcement, or protection of rights, or
          where the content has been shared with others and is lawfully retained by them.
        </P>

        <H2>14. Permitted Use</H2>
        <P>
          You may use RINGA only for lawful, personal, and legitimate purposes of a social or
          community nature, consistent with the nature of the Service. You undertake to treat other
          users respectfully and to comply with these Terms, the Community Guidelines, the Safety
          Guidelines, and applicable law.
        </P>
        <P>
          If you use RINGA on behalf of an event, venue, community, or other organization, you
          represent that you have the authority to act on behalf of that entity to the extent
          relevant to your use.
        </P>

        <H2>15. Prohibited Conduct</H2>
        <P>
          You may not use the Service to harass, threaten, intimidate, stalk, exploit, or defraud
          another person; impersonate any person or entity; create fake or misleading accounts;
          solicit money through fraud; send spam or unauthorized commercial communication; promote
          illegal activity; distribute malicious code; carry out scraping, crawling, harvesting, or
          systematic collection of information from the Service without authorization; reverse
          engineer or attempt to extract source code, except where expressly permitted by law;
          interfere with security or access-control mechanisms; circumvent a suspension or block;
          misuse location information; or encourage another person to violate these Terms.
        </P>
        <P>
          You may not use RINGA content, profiles, photos, or user data to build a competing
          database, to train or develop an automated model or system, to perform unauthorized
          facial recognition or biometric analysis, or to identify or profile users outside the
          purposes for which the Service makes the information available to you, unless RINGA has
          expressly authorized it in writing or the law requires otherwise.
        </P>

        <H2>16. Safety and Real-World Interactions</H2>
        <P>
          RINGA enables discovery and interaction but does not control users' behavior in the real
          world. You are responsible for your decisions regarding whether, when, and how to
          communicate with or meet another user.
        </P>
        <P>
          Unless expressly stated otherwise, RINGA does not perform criminal background checks on
          any user and does not guarantee a user's identity, their age beyond the information and
          controls the Service uses, their intentions, their statements, their behavior, their
          safety, or their suitability.
        </P>
        <P>
          Exercise appropriate judgment when meeting or interacting with people discovered through
          RINGA. Follow RINGA's Safety Guidelines, protect your personal information, and use the
          Report and Block tools as needed. In an emergency or when there is an immediate danger to
          physical safety, contact your appropriate local emergency services and do not rely on
          RINGA.
        </P>

        <H2>17. Reports, Blocks and Moderation</H2>
        <P>
          RINGA provides reporting and blocking tools. Reports may be reviewed by an authorized
          RINGA administrator. RINGA may also use technological or automated systems to help
          identify activity or content that may be abusive, harmful, fraudulent, or prohibited.
        </P>
        <P>
          RINGA may review reports and warn, restrict, suspend, or close accounts; remove or
          restrict content; restrict features; close Events; or take other reasonable action
          appropriate to the circumstances. RINGA is not obligated to disclose confidential
          moderation methods, internal safety information, information about another user, or
          information whose disclosure could harm security or privacy.
        </P>
        <P>
          Blocking may prevent users from seeing or interacting with one another in the relevant
          parts of the Service. RINGA cannot guarantee that blocking will prevent all contact
          outside RINGA.
        </P>

        <H2>18. Suspension and Termination</H2>
        <P>
          You may stop using RINGA at any time and delete your account from within the application,
          subject to the Privacy Policy.
        </P>
        <P>
          RINGA may suspend, restrict, or terminate your access, with or without prior notice where
          permitted by law, if we have a reasonable basis to believe that you have violated these
          Terms or rules that apply to the Service, created a possible legal risk or exposure,
          engaged in fraud or abuse, threatened the safety of users or the Service, attempted to
          circumvent an enforcement action, or where suspension is reasonably necessary to protect
          RINGA or others.
        </P>
        <P>
          Where applicable law requires notice, an explanation, a right of appeal, or another
          procedure, RINGA will provide the procedure required under that law.
        </P>

        <H2>19. Third-Party Events, Venues and Organizers</H2>
        <P>
          A Event may be related to an event, venue, organizer, business, community, or activity
          operated by a third party. Unless RINGA expressly states that it is the organizer, the
          third party - and not RINGA - is responsible for the physical premises, admission
          decisions, running the event, staff, products, services, activities, and its compliance
          obligations.
        </P>
        <P>
          RINGA does not guarantee that an event will take place, that information provided by an
          organizer is complete or accurate, or that a particular venue is safe or suitable. A
          separate transaction or arrangement between you and a third-party organizer is between you
          and that third party, except to the extent RINGA expressly participates in the
          transaction.
        </P>

        <H2>20. Intellectual Property</H2>
        <P>
          The Service, including the RINGA name, logos, branding, software, source and object code,
          interface, designs, graphics, databases, features, functionality, documentation, and
          content created by RINGA, belongs to RINGA or is licensed to it and is protected under
          applicable intellectual property laws.
        </P>
        <P>
          Subject to these Terms, RINGA grants you a limited, personal, revocable, non-exclusive,
          non-transferable, and non-sublicensable right to access and use the Service for its
          intended purposes. No additional rights are granted.
        </P>
        <P>
          You may not copy, reproduce, modify, distribute, sell, license, exploit, or create
          derivative works from RINGA's intellectual property, unless RINGA has expressly authorized
          it or the law permits it.
        </P>

        <H2>21. Third-Party Services</H2>
        <P>
          RINGA relies on third-party infrastructure and services for its operation, which may
          currently include Replit, Google Cloud Storage, Resend, Apple Push Notification service,
          Expo Push Service, Firebase Cloud Messaging, and Google Maps on Android devices. Use of
          certain device or platform services may also be subject to the relevant provider's terms.
        </P>
        <P>
          RINGA is not responsible for a third-party service to the extent the issue was caused by
          that independent provider and is outside RINGA's reasonable control, all subject to rights
          that cannot be excluded under applicable law.
        </P>

        <H2>22. Premium Features and Future Purchases</H2>
        <P>
          RINGA does not currently offer paid Premium subscriptions or in-app purchases. RINGA may
          add subscriptions, one-time purchases, or other paid features in the future.
        </P>
        <P>
          Before paid functionality becomes available, RINGA may set additional terms regarding
          purchase, renewal, cancellation, refunds, and billing. Purchases through the Apple App
          Store or Google Play may also be subject to the payment and subscription rules of the
          relevant store. Nothing in these Terms detracts from mandatory consumer rights.
        </P>

        <H2>23. App Store and Platform Terms</H2>
        <P>
          If you downloaded RINGA or use it through a third-party app store or platform, your use
          may also be subject to the relevant terms of that platform. These Terms are between you
          and RINGA and not between you and the app-store operator, except for rights the platform
          may have under its terms.
        </P>
        <P>These Terms are not intended to override binding platform rules or applicable law.</P>

        <H2>24. Changes to the Service</H2>
        <P>
          RINGA is an evolving product. We may add, change, test, suspend, or discontinue features,
          change technical requirements, adjust limits, or redesign parts of the Service. This may
          be done to improve the product, respond to safety or legal requirements, address
          technical issues, or adapt the business model.
        </P>
        <P>
          Where a change materially affects paid rights or where the law requires prior notice, we
          will provide the notice or remedy required by law.
        </P>

        <H2>25. Service Availability and Location Limitations</H2>
        <P>
          The Service may be interrupted, delayed, unavailable, or contain errors. RINGA does not
          guarantee continuous availability, that every feature will work on every device, that
          there will be users within a certain radius, that there will be participants in a Event, or
          that location information will always be accurate or up to date.
        </P>
        <P>
          Maintenance, network failures, third-party provider outages, device settings,
          operating-system limitations, force-majeure events, and other circumstances may affect
          availability.
        </P>

        <H2>26. Disclaimer of Warranties</H2>
        <P>
          To the maximum extent permitted by applicable law, the Service is provided "AS IS" and
          "AS AVAILABLE." RINGA disclaims warranties that can be lawfully disclaimed, including
          implied warranties of merchantability, fitness for a particular purpose, non-infringement,
          and quiet enjoyment.
        </P>
        <P>
          RINGA does not guarantee that the Service will be continuous, error-free, or secure; that
          location information will be accurate; that users are who they claim to be; that User
          Content is accurate; or that an interaction, Match, Event, event, or real-world meeting
          will be safe, successful, or suitable.
        </P>
        <P>
          Nothing in these Terms excludes liability, a warranty, or a consumer right that cannot be
          lawfully excluded.
        </P>

        <H2>27. Limitation of Liability</H2>
        <P>
          To the maximum extent permitted by applicable law, RINGA and the individuals involved in
          operating the Service will not be liable for indirect, incidental, special, consequential,
          exemplary, or punitive damages, or for loss of profits, revenue, data, goodwill, or
          business opportunity, arising from or related to the Service, even if advised of the
          possibility of such damages.
        </P>
        <P>
          To the maximum extent permitted by law, RINGA is not responsible for the conduct of users
          or third-party event organizers, or for interactions between users outside the Service or
          in the real world, except where such liability cannot be lawfully excluded.
        </P>
        <P>
          Subject to mandatory law, RINGA's aggregate liability for claims arising from the free
          Service will not exceed the greater of the amount you paid directly to RINGA for the
          Service during the 12 months preceding the event giving rise to the claim, or US$100 or
          the equivalent in local currency. This limit does not apply where the law prohibits it.
        </P>

        <H2>28. Indemnification</H2>
        <P>
          To the extent permitted by applicable law, you agree to indemnify and defend RINGA and
          the individuals involved in operating the Service against third-party claims,
          liabilities, damages, losses, and reasonable costs arising from your unlawful use of the
          Service, your material breach of these Terms, your User Content, or your violation of
          another person's rights.
        </P>
        <P>
          This section does not require a consumer to indemnify RINGA for RINGA's own unlawful
          conduct or in any matter where indemnification cannot lawfully be required.
        </P>

        <H2>29. Privacy</H2>
        <P>
          RINGA's collection, use, sharing, and retention of personal information are described in
          RINGA's{" "}
          <Link to="/privacy" className="text-purple hover:text-coral">
            Privacy Policy
          </Link>
          . The Privacy Policy is an important part of understanding how the Service works, but it
          does not detract from rights granted to you under applicable data protection laws.
        </P>

        <H2>30. Governing Law and Dispute Resolution</H2>
        <P>
          Because RINGA is currently operated from Israel and has not yet been incorporated, these
          Terms are subject to the laws of the State of Israel, without detracting from mandatory
          consumer rights or other mandatory laws that apply to you based on your place of
          residence.
        </P>
        <P>
          Before commencing a formal proceeding, you and RINGA are encouraged, where appropriate, to
          try to resolve a dispute by contacting <Mail /> with a description of the issue. This
          informal process does not prevent either party from seeking urgent relief or exercising
          rights that cannot be lawfully limited.
        </P>
        <P>
          A dispute not resolved informally may be brought before a court of competent jurisdiction
          in accordance with applicable law. These Terms do not currently impose mandatory
          arbitration or a class-action waiver.
        </P>

        <H2>31. Changes to These Terms</H2>
        <P>
          We may update these Terms as RINGA evolves, including to reflect new features, paid
          services, legal requirements, safety practices, organizational changes, or incorporation.
        </P>
        <P>
          If we make a material change, we may provide notice through the Service, by email, on the
          website, or by another appropriate method. Where the law requires it, changes will take
          effect only after the required notice or consent.
        </P>

        <H2>32. General Provisions</H2>
        <P>
          If any provision of these Terms is found to be unenforceable, the remaining provisions
          will continue to apply to the extent permitted by law, and the relevant provision will be
          interpreted or limited as necessary to make it enforceable, where permitted.
        </P>
        <P>
          RINGA's failure to enforce a provision is not a waiver of it. You may not assign or
          transfer your rights or obligations under these Terms without RINGA's consent, except
          where the law grants you that right. RINGA may transfer these Terms in connection with
          incorporation, financing, reorganization, merger, acquisition, sale of assets, or transfer
          of the Service, subject to applicable law.
        </P>
        <P>
          Headings are for convenience only. These Terms, together with policies and additional
          terms expressly incorporated into them, constitute the agreement governing your use of the
          Service, except where mandatory law provides otherwise.
        </P>

        <H2>33. Contact Us</H2>
        <P>For questions about these Terms, you can contact us:</P>
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

export default function Terms() {
  const { lang } = useLang();
  const c = CONTENT[lang];
  return (
    <LegalLayout title={c.title} subtitle={c.subtitle}>
      {c.body}
    </LegalLayout>
  );
}
