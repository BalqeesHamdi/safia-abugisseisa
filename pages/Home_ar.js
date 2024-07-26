import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const HomeAr = () => {
  const experties = [
    'الطيران',
    'بنوك ومالية',
    'الإفلاس والإعسار',
    'المنافسة ومكافحة الاحتكار',
    'الإمتثال',
    'البناء',
    'الشركات التجارية',
    'حماية البيانات والخصوصية',
    'التوظيف',
    'البينة التحتية والمشاريع',
    'التأمين',
    'ضوابط التجارة الدولية والعقوبات',
    'التمويل الإسلامي',
    'عمليات الدمج والإستحواذ',
    'العملاء الخاصين',
    'الأسهم الخاصة',
    'العقارات',
    'إعادة الهيكلة',
    'الشحن والملاحة البحرية',
    'الاتصالات والإعلام والتكنولوجيا',
    'رأس المال الاستثماري',
  ];

  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>مكتب صفية أبو قصيصة القانوني</title>
      </Head>
      <div className="home-main">
        <div className="home-overlay">
          <div className="text">
            <h1><span className='underline'> صفية أبوقصيصة</span> للإستشارات القانونية</h1>
          </div>
        </div>
      </div>
      <a name="intro">
        <div className="content">
          <p style={{ textAlign: 'justify', textAlignLast: 'center', direction: 'rtl' }}>صفية أبوقصيصة هو مكتب قانوني يضع التفكير المستقبلي في صميم ممارساته القانونية المبتكرة والمخصصة لتمكين الشركات من الحلول القانونية المبتكرة.
            نحن في صفية أبو قصيصة ، ندرك أهمية البقاء في طليعة المشهد التجاري العالمي المترابط في الوقت الحاضر.
            التزامنا بالاستفادة من التكنولوجيا والابتكار يتيح لنا تقديم حلول قانونية مخصصة تلبي الاحتياجات المتطورة لعملائنا. مع التركيز على السرعة والكفاءة، نسعى لتقديم نصائح سلسة ترتكز على المعرفة العميقة والخبرة المهنية.
            نهجنا المعاصر، بالاشتراك مع التزامنا بالتميز، يميزنا كشريك موثوق به للشركات التي تبحث عن دعم قانوني استراتيجي.</p>
        </div>
      </a>
      <a name="mission">
        <div className="image-block reversed">
          <div className="image"></div>
          <div className="image-block-text" style={{ marginRight: '-150px', direction: 'rtl' }}>
            <h1>مهمتنا</h1>
            <p>مهمتنا هي دعم الشركات الناشئة والشركات الصغيرة والمتوسطة، وتعزيز الابتكار والنمو والفرص باستمرار من خلال تقديم الحلول القانونية المبتكرة التي تتجاوب مع احتياجات السرعة في منظومة الأعمال الحالية.
              بالتركيز على دعم الابتكار وريادة الأعمال، نهدف إلى تقديم حلول قانونية مخصصة تتناسب مع التحديات المحددة التي تواجه هذه الفئات الديناميكية.
              من خلال إدخال منظور جديد ودماء جديدة في نهجنا، نسعى إلى إلهام ودعم الجيل القادم من قادة الأعمال في تحقيق أهدافهم بثقة وخبرة قانونية.</p>
          </div>
        </div>
      </a>
      <a name="vision">
        <div className="content full dubai-artline" style={{ backgroundPosition: 'bottom left' }} dir="rtl">
          <h1>رؤيتنا</h1>
          <p style={{ textAlignLast: 'right' }}>أن نكون الوجهة للحلول القانونية المبتكرة المصممة خصيصًا لمنظومة الأعمال الديناميكية في دبي والشرق الأوسط وشمال أفريقيا. نطمح في أن نكون المنصة المفضلة للشركات الناشئة والشركات الصغيرة والمتوسطة التي تبحث عن خبرة قانونية متطورة تدعم النمو وتعزز الابتكار وتفتح الفرص في هذه المنطقة النابضة بالحياة.
            أن نكون معروفين في منطقة الشرق الأوسط وشمال أفريقيا بنهجنا المتطور، واستغلال التكنولوجيا والابتكار مع الخبرة والمعرفة القانونية لتقديم حلول قانونية متطورة. نهدف إلى تجاوز توقعات العملاء بشكل مستمر من خلال تقديم خدمات قانونية عالية الجودة ومتخصصة تدعم النجاح وتضيف قيمة للشركات في جميع أنحاء العالم.</p>
        </div>
      </a>
      <a name="experties">
        <div className="colored-background experties" dir="rtl">
          <h1>خبراتنا</h1>
          <div className="boxes-container">
            {experties.map((item, index) => {
              if (index < 6)
                return (
                  <div className="box" key={item}>{item}</div>
                );
              else if (show && index > 5) {
                return (
                  <div className="box" style={!show ? { display: 'none' } : {}} key={item} >{item}</div>
                );
              }
            })}
            {
              show ?
                <div className="show-button" onClick={() => setShow(!show)} >
                  <p>عرض نتائج اقل<i className="fas fa-fw fa-chevron-up" style={{ marginRight: '4px' }} /></p>
                </div>
                : <div className="show-button" onClick={() => setShow(!show)} >
                  <p>عرض المزيد<i className="fas fa-fw fa-chevron-down" style={{ marginRight: '4px' }} /> </p>
                </div>
            }
          </div>
        </div>
      </a>

      <a name="team">
        <div className='main_team'>
          <div className="inner_team">
            <h1 className="team_title">فريقنا</h1>
            <div className="team_first_col">
              <div className='team_first_col_image_container'>
                <Image src={'/team_safia.png'} alt='' width={100} height={100} className='team_image' />
                <div className='team_member_titel_tight'>
                  <h1 className="team_member_title">صفية أبوقصيصة</h1>
                </div>
              </div>
              <div className="team_sec_col">
                <h2 className='team_sec_col_member_name'>المؤسسة/المستشارة القانونية</h2>
                <p>
                  عصام أبو قصيصة، محام ذو خبرة متنوعة منذ عام 1975، حاصل على درجة البكالوريوس في القانون من جامعة القاهرة - فرع السودان، ودراسات عليا من جامعة بريستول - المملكة المتحدة.</p>
                <p>
                  عصام أبوقصيصة ممارس في مختلف مجالات القانون #القانون_التجاري #قوانين_المالية #قانون النقل البحري #التجارة الدولية #التكنولوجيا المالية #الملكية_الفكرية، بخبرة واسعة في #البنوك_الإسلامية وقوانين الأموال الإسلامية بشكل عام. </p>
                <p style={{ marginBottom: '0' }}>
                  عمل كمحامٍ فدرالي مرخص، ويمارس الآن كاستشاري قانوني في السودان والإمارات، عمل كمستشار قانوني وشرعي لعدة بنوك إسلامية رائدة وشركات تجارية في الإمارات ومنطقة الشرق الأوسط وشمال أفريقيا، واعترف به من قبل مصرف الإمارات المركزي كمستشار شرعي ومراقب شرعي وتم تسجيله كخبير في قانون البنوك الإسلامية لدى محاكم دبي.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main_team" style={{ direction: 'rtl' }}>
          <div className="inner_team">
            <div className="team_first_col">
              <div className='team_first_col_image_container_reverse'>
                <Image src={'/issam.png'} alt='' width={100} height={100} className='team_image' />
              </div>
              <div className="team_sec_col_reverse">
                <div className='team_member_titel_tight'>
                  <h1 className="team_member_title" style={{ width: '70px' }}>عصام أبوقصيصة</h1>
                </div>
                <h2 className="team_member_rule" > كبير المستشارين</h2>
                <p>
                  عصام أبو قصيصة، محام ذو خبرة متنوعة منذ عام 1975، حاصل على درجة البكالوريوس في القانون من جامعة القاهرة - فرع السودان، ودراسات عليا من جامعة بريستول - المملكة المتحدة.</p>
                <p>
                  عصام أبوقصيصة ممارس في مختلف مجالات القانون #القانون_التجاري #قوانين_المالية #قانون النقل البحري #التجارة الدولية #التكنولوجيا المالية #الملكية_الفكرية، بخبرة واسعة في #البنوك_الإسلامية وقوانين الأموال الإسلامية بشكل عام. </p>
                <p style={{ marginBottom: '0' }}>
                  عمل كمحامٍ فدرالي مرخص، ويمارس الآن كاستشاري قانوني في السودان والإمارات، عمل كمستشار قانوني وشرعي لعدة بنوك إسلامية رائدة وشركات تجارية في الإمارات ومنطقة الشرق الأوسط وشمال أفريقيا، واعترف به من قبل مصرف الإمارات المركزي كمستشار شرعي ومراقب شرعي وتم تسجيله كخبير في قانون البنوك الإسلامية لدى محاكم دبي.                 </p>
              </div>
            </div>
          </div>
        </div>
      </a>

      <a name="news">
        <div className="content news news_reverse">
          <div className="news_scroll">
            <div className="news_block" dir="rtl">
              <p style={{ textAlign: 'right', marginRight: '40px', textAlignLast: 'right' }}>يسرنا أن نعلن عن شراكتنا الاستراتيجية مع مكتب حمدان رشود الزيودي للمحاماة، الذي يمثله السيد حمدان راشد علي رشود الزيودي، )قاضي استئناف سابق ومحام مرخص له بالتقاضي امام كافة المحاكم بدولة الامارات العربية المتحدة) وهي شراكة تعد بتعزيز خدماتنا وتوفير حلول قانونية شاملة. من خلال دمج قوتنا وخبرتنا، نهدف إلى تقديم نهج شامل لحماية جهودنا التجارية. تأكيدهم على التدابير الوقائية وخبرتهم في حل النزاعات، جنبًا إلى جنب مع التزامنا بالتميز وتكريس جهودنا وخلاصة معرفتنا لتحقيق مصلحة العمي ، سيضمن التمثيل الخبير والإرشاد الاستراتيجي لتحقيق النتائج المثلى. سنستغل معًا تضامننا لتقديم خدمة شاملة وسلسة تلبي الاحتياجات المتنوعة لعملائنا.</p>
            </div>
          </div>
          <h1>آخر الأخبار</h1>
        </div>
      </a>

      <a name="contact">
        <div className='contact_container'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.3089157270983!2d55.28321611714611!3d25.225360010848114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f134e609581e1%3A0x6947d732a1d95d91!2sAPI%20WORLD%20TOWER!5e0!3m2!1sen!2seg!4v1721991176785!5m2!1sen!2seg" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className='contact_info' style={{textAlign:'left', marginLeft:'40px'}}>
            <h1>تواصل معنا</h1>
            <div>
              <i className="fas fa-fw fa-phone" />
              <p style={{direction:'ltr'}}>+971 56 272 5557</p>
            </div>
            <div>
              <i className="fa fa-envelope" />
              <p>Info@safiaabugisseisa.com</p>
            </div>
            <div>
              <i className="fas fa-fw fa-map-pin" />
              <p>API World Tower - Ground Floor Sheokh Zayed Road,Trade Center Dubai, United Arab Emirates </p>
            </div>
          </div>
        </div> 
      </a>
    </>
  ); 
};

export default HomeAr;