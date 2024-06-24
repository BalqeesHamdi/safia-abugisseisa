import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <>
      <div className="navigation-bar">
        <img src={'./logo_sia.svg'} />
        <div >
          <a href="/" style={pathname === '/' ? { color: '#c22026' } : {}}> <p>English</p></a>
          <a href={'/Home_ar'} style={pathname === '/Home_ar' ? { color: '#c22026' } : {}}> <p>العربية</p></a>
        </div>
      </div>
      {pathname === '/' && <ul className="mini-navigation-bar">
        <li className="active"><a href="#intro">Intro</a></li>
        <li><a href="#mission">Our Mission</a></li>
        <li><a href="#vision">Our Vision</a></li>
        <li><a href="#experties">Experties</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#news">Latest News</a></li>
      </ul>}
      {pathname ==='/Home_ar' && <ul dir="rtl" className="mini-navigation-bar">
        <li className="active"><a href="#intro">عن المكتب</a></li>
        <li><a href="#mission">مهمتنا</a></li>
        <li><a href="#vision">رؤيتنا</a></li>
        <li><a href="#experties">خبراتنا</a></li>
        <li><a href="#team">فريقنا</a></li>
        <li><a href="#news">آخر الأخبار</a></li>
      </ul>}
    </>
  );
};

export default Nav;