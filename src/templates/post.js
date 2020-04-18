import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItemsSide from "../components/PostItemsSide";
import PostCode from "../components/PostCode";
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
import { FacebookProvider, Comments,Like } from 'react-facebook';
import parse, {domToReact} from 'html-react-parser';

export default ({pageContext}) =>{
  const replaceCode = node => {
  if (node.name === 'pre') {
    return node.children.length > 0 && <PostCode language={getLanguage(node)}>{domToReact(getCode(node))}</PostCode>;
  }
};
const getLanguage = node => {
  if ((node.children[0].attribs.class != null) ) {
    return node.children[0].attribs.class;
  }
  return null;
};
const getCode = node => {
  if (node.children.length > 0 && node.children[0].name === 'code') {
    return node.children[0].children;
  } else {
    return node.children;
  }
};
  return(
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
              <div className="my-10">
                <FacebookProvider  appId="271192993891621">
                  <Like  href="https://www.facebook.com/Wolfactiveweb.design.SEO" colorScheme="dark" showFaces />
                </FacebookProvider>
              </div>
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
              <h2 className="title--section" dangerouslySetInnerHTML={{__html: pageContext.title}} />
              {/*<div className="blog__single-content" dangerouslySetInnerHTML={{__html: pageContext.content}} />*/}
              <div className="blog__single-content">{parse(pageContext.content, {replace: replaceCode})}</div>
                <FacebookProvider appId="271192993891621">
                    <Comments href="https://www.facebook.com/Wolfactiveweb.design.SEO" />
                </FacebookProvider>
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
              <div className="mbt-5"><i className="fas fa-envelope icon text--primary"></i>Email: info.wolfactive@gmail.com</div>
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
}
