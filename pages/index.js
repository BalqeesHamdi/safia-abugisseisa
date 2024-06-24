
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const experties = [
    'Aviation',
    'Banking and Finance',
    'Bankruptcy and Insolvency',
    'Competition and Antitrust',
    'Compliance',
    'Construction',
    'Corporate and Commercial',
    'Data Protection and Privacy',
    'Employment',
    'Infrastructure and Projects',
    'Insurance',
    'International Trade Controls and Sanctions',
    'Islamic Finance',
    'Mergers and Acquisitions',
    'Private Client',
    'Private Equity',
    'Real Estate',
    'Restructuring',
    'Shipping and Maritime',
    'Telecommunications, Media and Technology',
    'Venture Capital',
  ];
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="home-main">
        <div className="home-overlay">
          <div className="text">
            <h1><span className='underline'>Safia Abugisseisa</span> Law Firm</h1>
            <h3>A forward-thinking legal practice dedicated to empowering businesses with innovative legal solutions</h3>
          </div>
        </div>
      </div>
      <div className="content">
        <p>We at Safia Abu Gisseisa, understand the importance of staying ahead in today&apos;s interconnected global business landscape.
          Our commitment to leveraging technology and innovation allows us to provide tailored legal solutions that meet the evolving needs of our clients.
          With a focus on speed and efficiency, we strive to deliver seamless advice that is underpinned by deep industry knowledge and expertise.
          Our contemporary approach, combines with a commitment to excellence, sets us apart as a trusted partner for businesses seeking strategic legal support.</p>
      </div>
      <div className="image-block">
        <div className="image"></div>
        <div className="image-block-text">
          <h1>Our Mission</h1>
          <p>Is to empower Startups and small - medium enterprises, fostering innovation, growth, and opportunity in a dynamic and ever-evolving landscape through bridging the gap between traditional legal practices and the fast-paced needs of today&apos;s business landscape. With a focus on supporting innovation and entrepreneurship, we aim to provide tailored legal solutions that cater to the specific challenges faced by these dynamic segments. By infusing a fresh, young perspective into our approach, we strive to inspire and support the next generation of business leaders in achieving their goals with confidence and legal expertise.</p>
        </div>
      </div>
      <div className="content full dubai-artline">
        <h1>Our Vision</h1>
        <p>To be the destination for innovative legal solutions tailored to the dynamic business landscape of Dubai, the Middle East, and North Africa. We aspire to be the go-to platform for startups and SMEs seeking cutting-edge legal expertise that drives growth, fosters innovation, and unlocks opportunities in this vibrant region.
          Is to be known in the MENA for our forward-thinking approach, leveraging technology and innovation to offer cutting-edge legal solutions. We aim to continually exceed client expectations by delivering high-quality, industry-specific legal services that drive success and add value to businesses worldwide.</p>
      </div>
      <div className="colored-background experties">
        <h1>Experties</h1>
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
                <p>Show Less<i className="fas fa-fw fa-chevron-up" /></p>
              </div>
              : <div className="show-button" onClick={() => setShow(!show)} >
                <p>Show More <i className="fas fa-fw fa-chevron-down" /> </p>
              </div>
          }
        </div>
      </div>
      <div className='team_outer'>
        <h1>Our Team</h1>
        <div className="content team">
          <div className="team_img">
            <Image src={`${process.env.BASE_URL}/team_safia.png`} alt='' width={100} height={100}/>
            <div>
              <p>Safia Abugisseisa</p>
            </div>
          </div>

          <div className="team_content">
            <h2>Founder & Legal Advisor</h2>
            <p><span style={{ color: '#c22026', fontSize: '1.6rem', fontWeight: '600' }}>Safia Abugisseisa</span>, is a qualified bilingual lawyer, with an intense multi-national legal experience since 2015, University of Khartoum Graduate, member of the Sudanese bar association (In where the legal system adopted is a hybrid of sharia/common law), and qualified to practice as a solicitor in the UAE.</p>
            <p>She comes as a sharp diligent legal counsellor and a self-motivated practitioner. In addition to being resourceful in various laws, She possesses an in-depth experience in #Common law #UAE laws and #Sudan laws (which is a hybrid of sharia common law system).</p>
            <p>Safia possesses a set of professional skills and interpersonal qualities which are vital for delivering integrated services to achieve our clients’ optimum legal coverage. She excels in #Corporate # commercial #Investment law, with a special focus on #telecommunication laws derived from her experience in the #TMT field.</p>
          </div>
        </div>
      </div>

      <div className="content news">
        <h1>Latest News</h1>
        <div className="news_scroll">
          <div className="news_block">
            <p className="english_news">Weare delighted to announce our Strategic partnership with The Hamdan Rashoud Al-Zayoudi Law Firm represented by Mr. HamdanRashid Ali Rashoud AlZeyoudi  (A Former Appeal Judge, and a litigation Lawyer licensed to practise law before all UAE courts of all jurisdictions), a collaboration that promises to enhance our services and provide comprehensive legal solutions. By combining our strengths and expertise, we aim to deliver a holistic approach to safeguarding our commercial endeavours. Their emphasis on pre-emptive measures and expertise in dispute resolution, coupled with our commitment to excellence and client advocacy, will ensure expert representation and strategic guidance for optimal outcomes. Together, we will leverage our unique strengths to provide a seamless and comprehensive service that meets the diverse needs of our clients.</p>
          </div>
        </div>
      </div>
    </>
  );
}
