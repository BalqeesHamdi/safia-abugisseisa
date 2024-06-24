import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="footer">
      <div>
        <div className="logo">
          <img src={'/logo_sia.svg'} />
        </div>
        {pathname === '/' && <ul>
          <li><a href="/">Home</a></li>
          <li><a href="../pages/about">About</a></li>
          <li><a href="../pages/experties">Experties</a></li>
          <li><a href="../pages/people">People</a></li>
          <li><a href="../pages/news">News</a></li>
          <li><a href="../pages/contact">Contact Us</a></li>
        </ul>}
        {pathname === '/Home_ar' && <ul dir="rtl" >
          <li><a href="#intro">عن المكتب</a></li>
          <li><a href="#mission">مهمتنا</a></li>
          <li><a href="#vision">رؤيتنا</a></li>
          <li><a href="#experties">خبراتنا</a></li>
          <li><a href="#team">فريقنا</a></li>
          <li><a href="#news">آخر الأخبار</a></li>
        </ul>}
      </div>
      <div className="rights">
        <p>@2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;