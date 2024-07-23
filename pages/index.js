
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
  const [section, setSection] = useState('company');
  return (
    <>
      <div className="home-main">
        <div className="home-overlay">
          <div className="text">
            <h1><span className='underline'>Safia Abugisseisa</span> Law Firm</h1>
          </div>
        </div>
      </div>
      <a name="intro">
        <div className="content">
          <p>We at Safia Abu Gisseisa, understand the importance of staying ahead in today&apos;s interconnected global business landscape.
            Our commitment to leveraging technology and innovation allows us to provide tailored legal solutions that meet the evolving needs of our clients.
            With a focus on speed and efficiency, we strive to deliver seamless advice that is underpinned by deep industry knowledge and expertise.
            Our contemporary approach, combines with a commitment to excellence, sets us apart as a trusted partner for businesses seeking strategic legal support.</p>
        </div>
      </a>
      <a name="mission">
        <div className="image-block">
          <div className="image"></div>
          <div className="image-block-text">
            <h1>Our Mission</h1>
            <p>Is to empower Startups and small - medium enterprises, fostering innovation, growth, and opportunity in a dynamic and ever-evolving landscape through bridging the gap between traditional legal practices and the fast-paced needs of today&apos;s business landscape. With a focus on supporting innovation and entrepreneurship, we aim to provide tailored legal solutions that cater to the specific challenges faced by these dynamic segments. By infusing a fresh, young perspective into our approach, we strive to inspire and support the next generation of business leaders in achieving their goals with confidence and legal expertise.</p>
          </div>
        </div>
      </a>
      <a name="vision">
        <div className="content full dubai-artline">
          <h1>Our Vision</h1>
          <p>To be the destination for innovative legal solutions tailored to the dynamic business landscape of Dubai, the Middle East, and North Africa. We aspire to be the go-to platform for startups and SMEs seeking cutting-edge legal expertise that drives growth, fosters innovation, and unlocks opportunities in this vibrant region.
            Is to be known in the MENA for our forward-thinking approach, leveraging technology and innovation to offer cutting-edge legal solutions. We aim to continually exceed client expectations by delivering high-quality, industry-specific legal services that drive success and add value to businesses worldwide.</p>
        </div>
      </a>
      <a name="services">
        <div className='services'>
          <ul>
            <li onClick={() => { setSection('company'); }} className={section === 'company' && 'active'}><h4>Company Formation</h4></li>
            <li onClick={() => { setSection('legaladvisory'); }} className={section === 'legaladvisory' && 'active'}><h4>Legal Advisory and Consultations</h4></li>
            <li onClick={() => { setSection('drafting'); }} className={section === 'drafting' && 'active'}><h4>Drafting and Reviewing Documents</h4></li>
            <li onClick={() => { setSection('representation'); }} className={section === 'representation' && 'active'}><h4>Representation in Legal Matters</h4></li>
            <li onClick={() => { setSection('conveyancing'); }} className={section === 'conveyancing' && 'active'}><h4>Conveyancing</h4></li>
            <li onClick={() => { setSection('employment'); }} className={section === 'employment' && 'active'}><h4>Employment Law</h4></li>
            <li onClick={() => { setSection('commercial'); }} className={section === 'commercial' && 'active'}><h4>Commercial Law</h4></li>
            <li onClick={() => { setSection('debt'); }} className={section === 'debt' && 'active'} ><h4>Debt Recovery</h4></li>
          </ul>
          {section === 'company' && <div className='services_content'>
            <ol>
              <li>Incorporation of companies, Branch Office, Representative Office and Subsidiary Companies in UAE Free Zones and in Mainland.</li>
              <li>Formation of offshore companies.</li>
              <li>Assistance with residency visas and opening of bank accounts in UAE.</li>
              <li>Drafting of MOA and other legal agreements.</li>
            </ol>
          </div>}
          {section === 'legaladvisory' && <div className='services_content'>
            <ol>
              <li>Providing legal opinions.</li>
              <li>Guidance on compliance with the law..</li>
            </ol>
          </div>}
          {section === 'drafting' && <div className='services_content'>
            <ol>
              <li>Drafting contracts, wills, trusts, and other legal documents.</li>
              <li>Reviewing and amending existing documents to ensure they are legally sound.</li>
            </ol>
          </div>}
          {section === 'representation' && <div className='services_content'>
            <ol>
              <li>Representing clients in negotiations and arbitrations.</li>
            </ol>
          </div>}
          {section === 'conveyancing' && <div className='services_content'>
            <ol>
              <li>Handling the legal aspects of buying and selling property.</li>
              <li>Ensuring all legal requirements are met in property transactions.</li>
            </ol>
          </div>}

          {section === 'employment' && <div className='services_content'>
            <ol>
              <li>Advising on employment contracts, disputes, and termination agreements.</li>
            </ol>
          </div>}

          {section === 'commercial' && <div className='services_content'>
            <ol>
              <li>Advising businesses on corporate structure, mergers, and acquisitions.</li>
              <li>Preparing of Due – diligence reports.</li>
              <li>Drafting and reviewing commercial contracts and agreements.</li>
            </ol>
          </div>}

          {section === 'debt' && <div className='services_content'>
            <ol>
              <li>Assisting clients in recovering owed debts through legal means.</li>
              <li>Advising on bankruptcy and insolvency issues.</li>
            </ol>
          </div>}
        </div>
      </a>
      <a name="experties">
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
      </a>
      <a name="team">
        <div className='main_team'>
          <div className="inner_team">
            <h1 className="team_title">Our Team</h1>
            <div className="team_first_col">
              <div className='team_first_col_image_container'>
                <Image src={`${process.env.BASE_URL}/team_safia.png`} alt='' width={100} height={100} className='team_image' />
                <div>
                  <h1 className="team_member_title">Safia Abugisseisa</h1>
                </div>
              </div>
              <div className="team_sec_col">
                <h2 className='team_sec_col_member_name'>Founder & Legal Advisor</h2>
                <p>
                  A qualified bilingual lawyer, with an intense multi-national legal experience since 2015, University of Khartoum Graduate, qualified to practice as a solicitor in the  UAE, and member of the  Sudanese bar association (In where the legal system adopted is a hybrid  of sharia/common law).
                </p>
                <p>
                  She comes as a sharp diligent legal counsellor and a  self-motivated practitioner. In addition to being resourceful in various  laws, She possesses an in-depth experience in Common law, UAE laws and  Sudan laws (which is a hybrid of sharia common law system).
                </p>
                <p>
                  Safia  possesses a set of professional skills and interpersonal qualities  which are vital for delivering integrated services to achieve our  clients’ optimum legal coverage. She excels in Corporate, commercial and Investment law, with a special focus on Telecommunication laws derived  from her experience in the TMT field.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="main_team" style={{direction:'rtl'}}>
          <div className="inner_team">
            <div className="team_first_col">
              <div className='team_first_col_image_container_reverse'>
                <Image src={`${process.env.BASE_URL}/issam.png`} alt='' width={100} height={100} className='team_image' />
              </div>
              <div className="team_sec_col_reverse">
                <div className='team_member_titel_tight'>
                  <h1 className="team_member_title">Mr. Issam Abugisseisa</h1>
                </div>
                <h2 style={{ padding: '0 0 20px 0', color: '#c22026', borderBottom: 'solid 2px #c22026' }}>Senior Consultant</h2>
                <p>
                  Is a senior professional with diversified experience since 1975, has his LLB from Cairo University- Sudan branch, and post graduate Studies from University of Bristol - UK.              </p>
                <p>
                  Issam Abugisseisa practiced  in all fields of business Law, financial Laws, Maritime law, International Trade, Fintech and Intellectual property, with extensive  experience in Islamic_Banking and Islamic Financial Laws in general.</p>
                <p style={{ marginBottom: '0' }}>
                  He practiced as a Licensed Federal Advocate, and practicing now as a Legal consultant in Sudan and UAE.  He worked as a Legal & Shariah  Adviser for several Islamic Leading Banks and commercial corporates in the UAE and MENA Region, and   recognized by the UAE Central Bank as a Shariah Adviser  & Controller and listed as an Islamic finance law expert with Dubai courts .              </p>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a name="news">
        <div className="content news">
          <h1>Latest News</h1>
          <div className="news_scroll">
            <div className="news_block">
              <p className="english_news">Weare delighted to announce our Strategic partnership with The Hamdan Rashoud Al-Zayoudi Law Firm represented by Mr. HamdanRashid Ali Rashoud AlZeyoudi  (A Former Appeal Judge, and a litigation Lawyer licensed to practise law before all UAE courts of all jurisdictions), a collaboration that promises to enhance our services and provide comprehensive legal solutions. By combining our strengths and expertise, we aim to deliver a holistic approach to safeguarding our commercial endeavours. Their emphasis on pre-emptive measures and expertise in dispute resolution, coupled with our commitment to excellence and client advocacy, will ensure expert representation and strategic guidance for optimal outcomes. Together, we will leverage our unique strengths to provide a seamless and comprehensive service that meets the diverse needs of our clients.</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
