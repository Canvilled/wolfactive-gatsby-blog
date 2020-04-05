import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItemsSide from "../components/PostItemsSide";
import PageTransition from 'gatsby-plugin-page-transitions';
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  ViberShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  ViberIcon,
} from "react-share";

export default ({pageContext}) =>(
<PageTransition>
  <Layout>
  <SEO title={pageContext.title}
    description={pageContext.yoast_meta.yoast_wpseo_metadesc}
    image={pageContext.featured_media.source_url}
    keywords={pageContext.acf.keyword}
    slug={pageContext.slug}
   />
  <div className="blog__single my-50">
    <div className="row-divide">
      <div className="col-divide-9 col-divide-md-12">
        <div className="blog__single-img">
          <img data-src={pageContext.featured_media.source_url} alt={pageContext.slug} className="lazyload"/>
        </div>
        <div className="blog__single-contain">
          <div className="social--share">
            <FacebookShareButton className="mxr-5" url={`https://blog.wolfactive.net/${pageContext.slug}`}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <LinkedinShareButton className="mxr-5" url={`https://blog.wolfactive.net/${pageContext.slug}`}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <PinterestShareButton className="mxr-5" url={`https://blog.wolfactive.net/${pageContext.slug}`} meta={pageContext.featured_media.source_url}>
              <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
            <TwitterShareButton className="mxr-5" url={`https://blog.wolfactive.net/${pageContext.slug}`}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <ViberShareButton className="mxr-5" url={`https://blog.wolfactive.net/${pageContext.slug}`}>
              <ViberIcon size={32} round={true} />
            </ViberShareButton>
          </div>
          <div className="date">
            <i className="far fa-calendar-alt"></i> {pageContext.date}
          </div>
            <h2 className="title--section">
              {pageContext.title}
            </h2>
            <div className="blog__single-content" dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </div>
      </div>
      <div className="sidebar col-divide-3 col-divide-md-12">
        <div className="sidebar__item">
          <h3 className="sidebar__title text--upcase">
            Theo dõi chúng tôi
          </h3>
          <div className="sidebar__cotent social--sidebar">
            <a href="https://www.facebook.com/Wolfactiveweb.design.SEO/" target="_blank" rel="noreferrer" className="social--icon social--facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/designbyngan/channel/" target="_blank" rel="noreferrer" className="social--icon social--instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.behance.net/kieungan16c6e9" rel="noreferrer" target="_blank" className="social--icon social--behance">
              <i className="fab fa-behance-square"></i>
            </a>
            <a href="https://www.pinterest.com/kieungan16109/" rel="noreferrer" target="_blank" className="social--icon social--pinterest">
              <i className="fab fa-pinterest-square"></i>
            </a>
            <a href="https://github.com/Canvilled" rel="noreferrer" target="_blank" className="social--icon social--github">
              <i class="fab fa-github-square"></i>
            </a>
          </div>
        </div>
        <div className="sidebar__item">
          <h3 className="sidebar__title text--upcase">
            Thông tin liên hệ
          </h3>
          <div className="sidebar__cotent">
            <div className="mbt-5"><i className="fas fa-envelope icon text--primary"></i>Email: huyminhnguyenpham@gmail.com</div>
            <div className="mbt-5"><i className="fas fa-mobile icon text--primary"></i>Hotline: 032 717 2497</div>
          </div>
        </div>
        <div className="sidebar__item">

          <h3 className="sidebar__title text--upcase">
            bài viết mới nhất
          </h3>
          <PostItemsSide/>
        </div>
      </div>
    </div>
  </div>
</Layout>
</PageTransition>
)
