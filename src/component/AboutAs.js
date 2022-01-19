import React ,  { useState }  from 'react';
import { Button } from 'react-bootstrap';
import logo from '../redux/images/logo.png';
import { Image } from 'react-bootstrap';
import {RightOutlined,LeftOutlined} from '@ant-design/icons';


export function AboutAs(props) {
  const numofpages = React.Children.count(props.children)
  const [currentpage, setCurrentPage] = useState(0)

  function ShowPage(page) {

    switch (page) {
        case 0:
            return <History />
            break;
        case 1:
            return <Reason />
            break;
        case 2:
            return <Status />
            break;
    }
}

  return (
    <>
            <div id="div1" className="row justify-content-around m-5">
                <Button id="b" className="col-1 align-self-center p-0" style={{height:'400px'}} variant="outline-primary" disabled={currentpage === 0}
                    onClick={(e) => setCurrentPage(v => v - 1)}> <RightOutlined /> </Button>
                <div className="col-6 align-self-center"> {ShowPage(currentpage)}</div>
                <Button className="col-1 align-self-center p-0" style={{height:'400px'}}  variant="outline-primary" disabled={currentpage >= numofpages - 1}
                    onClick={(e) => setCurrentPage(v => v + 1)}><LeftOutlined /></Button>
            </div>
    </>
  )
}


export function History(props) {

  return (
    <>
    <h5>הסיפור של Laline</h5>
       <h7>ברוכים הבאים לעולם של Laline, עולם שיצרנו בשנת 1999 וכמו זה האמיתי ממשיך להתפתח,
להתחדש ולצמוח מאז. מחנות קטנה ומקסימה במרכז תל אביב, הפכנו לרשת המובילה בישראל למוצרי
טיפוח ולייף סטייל לגוף ולנפש, עם למעלה מ- 100 חנויות בארץ ובעולם.

אבל זהו מבחינתנו כל הדמיון לעולם "האמיתי".
בעולם הלבן שיצרנו, עולם פינוק ורוגע, אנחנו מזמינים להשאיר את השגרתי וההכרחי מאחור ולהתמסר לחוויה רומנטית של הנאה טהורה, מלאת שמחת חיים והשראה. מעודדים את האישה הללינית, זו שה- Body וה-  Soul שלה מחוברים, לטפח את עצמה עם הניחוחות והנוכחות שמבטאים את ההצהרה האישית והנשית שלה.
לעצמה, למשפחה שלה, לגבר שהיא אוהבת או לחברות הכי טובות, קולקציית המוצרים שלנו מציעה מבחר מוצרים לטיפוח הגוף, אמבט ורחצה, פילינגים ובישום; מוצרי איפור, לקים, טיפוח ויופי לפנים; פינוקי אווירה ארומאטיים לבית וכן מוצרי לייף סטייל להשלמת החוויה.

סדרות המוצרים המובילות של הרשת מבוססות על מבחר הניחוחות האהובים והמרגשים שלנו. בכל אחת מהן מגוון מוצרים עשיר שהשילוב ביניהם מעניק לגוף ולנפש חוויית טיפוח מושלמת- מרחצה ועד בישום. לצד אלה פיתחנו גם סדרות ייעודיות המעניקות תשומת לב ואהבה לכל המשפחה- נשים, גברים, תינוקות ונערות, וכמובן מגוון מרגש של מארזי מתנות.

את הערכים הלליניים, שמלווים אותנו לאורך השנים, אנחנו מטביעים בכל פריט ופרט בעשייה שלנו: מחדשנות בפיתוח המוצרים ועד הקפדה על איכות המרכיבים, מהדיוק בעיצוב האריזות ועד הרומנטיות הקסומה של החנויות.כל אלה נעשים בחדוות יצירה ההופכת את המפגש בין גוף לנפש לחגיגה של הנאה ואסתטיקה.</h7>

    </>
  )
}


export function Reason(props) {
  return (
    <>
      <Image id="img1" style={{textAlign:'center'}} src={logo}></Image> 
      <br/>
      <br/>
      <div>
           <h6>לפניות:</h6>
           <h6>072-250-2505</h6>
           <h6>Support@Laline.co.il</h6>
           <h6>שעות פעילות מוקד שירות הלקוחות של האתר:</h6>
           <h6>ימים א'-ה': 09:00-16:00</h6>
      </div>
    </>
  )

}


export function Status(props) {
  return (
    <>
    <h5>חזון ללין</h5>
       <h7>Laline שואפת להמשיך ולהוביל את קטגוריית מוצרי הטיפוח והיופי לגוף ולנפש בישראל.
אנו ב- Laline מכוונים לסגנון חיים רגוע ומפנק תוך שיפור מתמיד של רווחתם ובריאותם (Well Being) של לקוחותינו ועובדינו.

Laline מהווה נדבך חשוב בשוק המתנות בישראל וממצבת עצמה כבחירה האולטימטיבית בקטגוריית המתנות.

Laline מטפחת את לקוחותיה ושואפת להיות נגישה וזמינה לצרכיהם ואף לספק להם חווית קנייה מרגשת וייחודית באווירה רב חושית וקסומה.

Laline שואפת להמשיך ולהתרחב בשוק הבינ"ל ולהתבסס בו. 

Laline מציגה חדשנות בלתי מתפשרת באיכות ונראות המוצרים, המתאימה לכל כיס ולכל המשפחה. כל זאת תוך הנהגת אחריות חברתית, קהילתית ואקולוגית.

Laline מתייחסת לעובדיה כחלק בלתי נפרד מהצלחת החברה, מעודדת עבודת צוות והפעלת יזמות ויצירתיות, תוך מתן שירות איכותי והפגנת בקיאות ומקצוענות.

Laline  מעניקה לעובדיה יחס חם, נוטעת בהם תחושה של גאווה השתייכות ומאפשרת להם לראות בללין מקום שניתן לצמוח ולהתפתח בו.</h7>

    </>
  )

}
export default { AboutAs, History, Reason, Status }