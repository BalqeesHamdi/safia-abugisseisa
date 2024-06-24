import { useState } from "react"

const HomeAr = () => {
  const experties = [
    "الطيران",
    "بنوك ومالية",
    "الإفلاس والإعسار",
    "المنافسة ومكافحة الاحتكار",
    "الإمتثال",
    "البناء",
    "الشركات التجارية",
    "حماية البيانات والخصوصية",
    "التوظيف",
    "البينة التحتية والمشاريع",
    "التأمين",
    "ضوابط التجارة الدولية والعقوبات",
    "التمويل الإسلامي",
    "عمليات الدمج والإستحواذ",
    "العملاء الخاصين",
    "الأسهم الخاصة",
    "العقارات",
    "إعادة الهيكلة",
    "الشحن والملاحة البحرية",
    "الاتصالات والإعلام والتكنولوجيا",
    "رأس المال الاستثماري",
  ]
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="home-main">
        <div className="home-overlay">
          <div className="text">
          <h1>مكتب<span style={{ borderBottom: "6px solid #c22026", paddingBottom: "20px" }}> صفية أبوقصيصة</span> القانوني</h1>
            <h3 dir="rtl"> نضع التفكير المستقبلي في صميم ممارساته القانونية المبتكرة والمخصصة لتمكين الشركات من الحلول القانونية المبتكرة.</h3>
          </div>
        </div>
      </div>
      <div className="content">
        <p>صفية أبوقصيصة هو مكتب قانوني يضع التفكير المستقبلي في صميم ممارساته القانونية المبتكرة والمخصصة لتمكين الشركات من الحلول القانونية المبتكرة.
          نحن في صفية أبو قصيصة ، ندرك أهمية البقاء في طليعة المشهد التجاري العالمي المترابط في الوقت الحاضر.
          التزامنا بالاستفادة من التكنولوجيا والابتكار يتيح لنا تقديم حلول قانونية مخصصة تلبي الاحتياجات المتطورة لعملائنا. مع التركيز على السرعة والكفاءة، نسعى لتقديم نصائح سلسة ترتكز على المعرفة العميقة والخبرة المهنية.
          نهجنا المعاصر، بالاشتراك مع التزامنا بالتميز، يميزنا كشريك موثوق به للشركات التي تبحث عن دعم قانوني استراتيجي.</p>
      </div>
      <div className="image-block reversed">
        <div className="image"></div>
        <div className="image-block-text" style={{ marginRight: '-150px' }}>
          <h1>مهمتنا</h1>
          <p>مهمتنا هي دعم الشركات الناشئة والشركات الصغيرة والمتوسطة، وتعزيز الابتكار والنمو والفرص باستمرار من خلال تقديم الحلول القانونية المبتكرة التي تتجاوب مع احتياجات السرعة في منظومة الأعمال الحالية.
            بالتركيز على دعم الابتكار وريادة الأعمال، نهدف إلى تقديم حلول قانونية مخصصة تتناسب مع التحديات المحددة التي تواجه هذه الفئات الديناميكية.
            من خلال إدخال منظور جديد ودماء جديدة في نهجنا، نسعى إلى إلهام ودعم الجيل القادم من قادة الأعمال في تحقيق أهدافهم بثقة وخبرة قانونية.</p>
        </div>
      </div>
      <div className="content full dubai-artline" style={{ backgroundPosition: 'bottom left' }} dir="rtl">
        <h1>رؤيتنا</h1>
        <p style={{ textAlign: 'right' }}>أن نكون الوجهة للحلول القانونية المبتكرة المصممة خصيصًا لمنظومة الأعمال الديناميكية في دبي والشرق الأوسط وشمال أفريقيا. نطمح في أن نكون المنصة المفضلة للشركات الناشئة والشركات الصغيرة والمتوسطة التي تبحث عن خبرة قانونية متطورة تدعم النمو وتعزز الابتكار وتفتح الفرص في هذه المنطقة النابضة بالحياة.
          أن نكون معروفين في منطقة الشرق الأوسط وشمال أفريقيا بنهجنا المتطور، واستغلال التكنولوجيا والابتكار مع الخبرة والمعرفة القانونية لتقديم حلول قانونية متطورة. نهدف إلى تجاوز توقعات العملاء بشكل مستمر من خلال تقديم خدمات قانونية عالية الجودة ومتخصصة تدعم النجاح وتضيف قيمة للشركات في جميع أنحاء العالم.</p>
      </div>
      <div className="colored-background experties" dir="rtl">
        <h1>خبراتنا</h1>
        <div className="boxes-container">
          {experties.map((item, index) => {
            if (index < 6)
              return (
                <div className="box" key={item}>{item}</div>
              )
            else if (show && index > 5) {
              return (
                <div className="box" style={!show ? { display: "none" } : {}} key={item} >{item}</div>
              )
            }
          })}
          {
            show ?
              <div className="show-button" onClick={() => setShow(!show)} >
                <p>عرض نتائج اقل<i className="fas fa-fw fa-chevron-up" style={{marginRight:'4px'}} /></p>
              </div>
              : <div className="show-button" onClick={() => setShow(!show)} >
                <p>عرض المزيد<i className="fas fa-fw fa-chevron-down" style={{marginRight:'4px'}} /> </p>
              </div>
          }
        </div>
      </div>
      <div className="content team" dir="rtl">
        <h1 style={{right:'20%'}}>فريقنا</h1>
        <div className="team_img" style={{ marginLeft: '40px' }}>
          <img src={"/team_safia.png"} style={{transform:'scaleX(-1)'}} />
          <div>
            <p>صفية أبو قصيصة</p>
          </div>
        </div>

        <div className="team_content">
          <h2> المؤسسة/المستشارة القانونية</h2>
          <p style={{ textAlign: 'right' }} dir="ltr">. محامية مؤهلة، حاصلة على بكلاريوس القانون مرتبة الشرف من جامعة الخرطوم، عضوة في نقابة المحامين السودانية (حيث يتبنى النظام القانوني نظاماً مختلطاً من الشريعة والقانون الانجلوسكسوني)، مرخص لها بتقديم خدمات الاستشارات القانونية بدولة الامارات العربية المتحدة، كما انها مرخص لها بالتقاضي امام كافة المحاكم السودانية بمختلف درجاتها. اكتسبت صفية خبرة قانونية اقليمية عميقة  منذ العام 2015 وذلك لحصولها على فرص تدريب مكثفة لدى مكاتب دولية ومحلية.
            صفية تأتي كمستشارة قانونية دقيقة ومبادرة . بالإضافة إلى كونها متمكنة في مختلف القوانين، تتمتع صفية بمجموعة من المهارات المهنية والصفات الشخصية التي تعتبر اساسية لتقديم خدمات متكاملة لتحقيق تغطية قانونية مثلى لعملائنا. إنها متميزة في #قانون_الشركات #القانون_التجاري #قانون_الاستثمار، مع تركيز خاص على #قوانين الاتصالات الناتجة عن خبرتها في مجال #تقنية المعلومات والاتصالات.
          </p>
        </div>
      </div>
      <div className="content news">
      <div className="news_scroll">
        <div className="news_block" dir="rtl">
          <p style={{textAlign:'right', marginRight:'40px'}}>يسرنا أن نعلن عن شراكتنا الاستراتيجية مع مكتب حمدان رشود الزيودي للمحاماة، الذي يمثله السيد حمدان راشد علي رشود الزيودي، )قاضي استئناف سابق ومحام مرخص له بالتقاضي امام كافة المحاكم بدولة الامارات العربية المتحدة) وهي شراكة تعد بتعزيز خدماتنا وتوفير حلول قانونية شاملة. من خلال دمج قوتنا وخبرتنا، نهدف إلى تقديم نهج شامل لحماية جهودنا التجارية. تأكيدهم على التدابير الوقائية وخبرتهم في حل النزاعات، جنبًا إلى جنب مع التزامنا بالتميز وتكريس جهودنا وخلاصة معرفتنا لتحقيق مصلحة العمي ، سيضمن التمثيل الخبير والإرشاد الاستراتيجي لتحقيق النتائج المثلى. سنستغل معًا تضامننا لتقديم خدمة شاملة وسلسة تلبي الاحتياجات المتنوعة لعملائنا.</p>
        </div>
      </div>
      <h1>آخر الأخبار</h1>
      </div>
    </>
  )
}

export default HomeAr