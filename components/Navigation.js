import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <>
      <div className="navigation-bar">
        <Image src={'/logo_sia.png'} alt='' width={100} height={50}/>
        <div >
          <Link href="/" style={pathname === '/' ? { color: '#c22026' } : {}}> <p>English</p></Link>
          <Link href={'/Home_ar'} style={pathname === '/Home_ar' ? { color: '#c22026' } : {}}> <p>العربية</p></Link>
        </div>
      </div>
      {pathname === '/' && <ul className="mini-navigation-bar">
        <li><a href="#intro">Intro</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#experties">Experties</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#news">Latest News</a></li>
        <button><a href="#contact" className='button'>Contact Us</a></button>
      </ul>}
      {pathname ==='/Home_ar' && <ul dir="rtl" className="mini-navigation-bar">
        <li><a href="#intro">عن المكتب</a></li>
        <li><a href="#services">خدماتنا</a></li>
        <li><a href="#experties">خبراتنا</a></li>
        <li><a href="#team">فريقنا</a></li>
        <li><a href="#news">آخر الأخبار</a></li>
        <button><a href="#contact" className='button'>تواصل معنا</a></button>
      </ul>}
    </>
  );
};

export default Nav;