import React from 'react'

const Firstsection = () => {
  return (
    <nav aria-label="Main" id="animesh-navigation-container" className="is-scrolled">
      <a className="www-navigation__skip" href="#content" tabIndex={0}>Skip to Main Content</a>
      <div className="www-navigation__mobile">
        <div className="www-navigation__mobile__menu-bar">
          <a className="www-navigation__mobile__logo" href="/">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 31" className="squarespace-mark is-fill notranslate">
              <title>Squarespace Logo</title>
              <path fillRule="evenodd" clipRule="evenodd" d="m7.583 16.216 11.562-11.98a4.063 4.063 0 0 1 5.889 0l.9.933 1.802-1.867-.9-.934C25.57 1.058 23.885.335 22.089.335c-1.794 0-3.48.723-4.745 2.034L5.78 14.35l1.802 1.867Z" fill="#fff" />
              <path fillRule="evenodd" clipRule="evenodd" d="m23.017 8.192-1.802-1.867-11.562 11.98a4.067 4.067 0 0 1-5.888 0c-1.624-1.682-1.624-4.42 0-6.102L13.74 1.867 11.94 0 1.963 10.337c-2.617 2.711-2.617 7.124 0 9.835 1.265 1.311 2.95 2.034 4.745 2.034s3.481-.723 4.747-2.034l11.562-11.98ZM34.527 10.336a6.553 6.553 0 0 0-9.492 0l-11.562 11.98 1.8 1.868 11.563-11.98a4.067 4.067 0 0 1 5.889 0 4.364 4.364 0 0 1 1.217 3.05 4.365 4.365 0 0 1-1.217 3.051l-9.977 10.337 1.802 1.867 9.977-10.337c2.617-2.711 2.617-7.124 0-9.836Z" fill="#fff" />
              <path fillRule="evenodd" clipRule="evenodd" d="m28.906 14.293-11.562 11.98a4.067 4.067 0 0 1-5.889 0l-.9-.933-1.803 1.867.901.933c1.266 1.311 2.951 2.034 4.747 2.034 1.795 0 3.48-.723 4.746-2.035L30.708 16.16l-1.802-1.867Z" fill="#fff" />
            </svg>
          </a>
          <div className="www-navigation__mobile__account-info__logged-in">
            <button className="www-navigation__mobile__account-info__logged-in__avatar" type="button" aria-expanded="false" aria-label="Account information dropdown menu" aria-controls="navigation-auth-menu-mobile-wrapper">
              <span className="www-navigation__mobile__account-info__logged-in__initials" />
            </button>
            <div id="navigation-auth-menu-mobile-wrapper" className="www-navigation__mobile__account-info__menu-wrapper" style={{ top: '72px', right: '0px' }}>
              <div className="www-navigation__mobile__account-info__menu">
                <div className="www-navigation__mobile__account-info__menu__caret" style={{ left: '-724px' }} />
                <div className="www-navigation__mobile__account-info__menu__name" />
                <div className="www-navigation__mobile__account-info__menu__email" />
                <a className="www-navigation__mobile__account-info__menu__dashboard-link" href="https://account.squarespace.com/">
                  Account Dashboard
                </a>
                <a className="www-navigation__mobile__account-info__menu__domains-link" href="https://account.squarespace.com/domains">
                  Domains
                </a>
                <a href="/" className="www-navigation__mobile__account-info__menu__logout">Log Out</a>
              </div>
            </div>
          </div>
          <a className="www-navigation__mobile__inline-cta" href="/templates" data-identifier="inline-cta">
            <span>Get Started<span>
            </span></span></a>
          <button className="www-navigation__mobile__drawer-button" aria-label="Navigation menu" aria-expanded="false">
            <svg viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width={30} height={2} />
              <rect y={8} width={30} height={2} />
              <rect y={16} width={30} height={2} />
            </svg>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.0825 18.1849L27.185 11.0825L29.0826 12.9802L21.9802 20.0825L29.0826 27.1849L27.185 29.0825L20.0825 21.9802L12.9803 29.0823L11.0826 27.1847L18.1849 20.0825L11.0826 12.9804L12.9803 11.0827L20.0825 18.1849Z" fill="white" />
            </svg>
          </button>
        </div>
        <div className="www-navigation__mobile__menu-content">
          <div className="www-navigation__mobile__menu-wrapper">
            <div className="www-navigation__mobile__menu www-navigation__mobile__menu--explore">
              <button aria-label="Products dropdown menu">
                <span>Products</span><svg className="arrow" width={10} height={8} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z" />
                </svg>
              </button>
              <div className="www-navigation__mobile__menu__children" style={{ height: '0px' }}>
                <div className="www-navigation__mobile__menu__children-col">
                  <div className="www-navigation__mobile__menu__child">
                    <h3>Create a website</h3>
                    <a href="/website-design" data-identifier="website-parent">Website Overview<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/websites/designer-templates" data-identifier="website-web-design">Website Templates<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/websites/create-a-portfolio" data-identifier="website-portfolios">For Portfolios<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/websites/create-a-blog" data-identifier="website-blogging">For Blogs<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/websites/analytics" data-identifier="website-analytics">Analytics<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/designer/home?channel=sqsp_circle&subchannel=frontsite_header_nav&utm_medium=sqsp_circle&utm_source=frontsite_header_nav" data-identifier="difm">Hire an Expert<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/enterprise" data-identifier="enterprise-solutions">Enterprise Solutions<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                  </div>
                  <div className="www-navigation__mobile__menu__child">
                    <h3>Get a Domain</h3>
                    <a href="https://domains.squarespace.com" data-identifier="domains-parent">Find a Domain<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="https://domains.squarespace.com/transfer-a-domain" data-identifier="domains-transfer">Transfer a Domain<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                  </div>
                </div>
                <div className="www-navigation__mobile__menu__children-col">
                  <div className="www-navigation__mobile__menu__child">
                    <h3>Sell Anything</h3>
                    <a href="/ecommerce-website" data-identifier="commerce-parent">Ecommerce Overview<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/designs-that-sell" data-identifier="commerce-designs">Templates for Sellers<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/sell-products" data-identifier="commerce-sell-products">Sell Products<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/sell-services" data-identifier="commerce-sell-services">Sell Services<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/scheduling" data-identifier="commerce-scheduling">Schedule Appointments<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/online-courses" data-identifier="commerce-online-courses">Courses<div className="www-navigation__new-badge">New</div><span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/project-management" data-identifier="commerce-project-management">Project Management<div className="www-navigation__new-badge">New</div><span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/membership-sites" data-identifier="commerce-member-areas">Memberships<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/store-management" data-identifier="store-management">Store Management<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/extensions/home" data-identifier="extensions">Commerce Extensions<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                  </div>
                  <div className="www-navigation__mobile__menu__child">
                    <h3>Build your Brand</h3>
                    <a href="/website-marketing" data-identifier="marketing-parent">Marketing Overview<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/email-marketing" data-identifier="marketing-email-campaigns">Email Marketing<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/marketing/seo" data-identifier="marketing-seo">SEO Tools<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/creators" data-identifier="creators">Creator Tools<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/logo" data-identifier="logo-maker">Logo Maker<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                  </div>
                </div>
                <div className="www-navigation__mobile__menu__children-fullwidth">
                  <h3>From Squarespace</h3>
                  <div className="from-squarespace">
                    <a data-identifier="acuity" className="from-squarespace__product" title="Acuity" href="https://acuityscheduling.com/" target="_blank">
                      <div className="from-squarespace__product__logo">
                        <svg width={24} height={28} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" fillRule="evenodd" clipRule="evenodd" d="M0 11.9398C0 5.35544 5.38386 0 11.9996 0C18.6169 0 24 5.35619 24 11.9398C24 15.4903 22.4347 18.6835 19.9546 20.8724L22.8536 27.018C22.8871 27.0781 22.8971 27.1484 22.8816 27.2154C22.8661 27.2823 22.8263 27.3412 22.7698 27.3804C22.7133 27.4196 22.6443 27.4363 22.5761 27.4274C22.508 27.4185 22.4456 27.3846 22.4011 27.3322L17.5783 22.5094C15.9107 23.3842 14.0123 23.8796 11.9996 23.8796C9.93848 23.8819 7.92426 23.3527 6.14515 22.3592L2.73927 25.6298C2.70644 25.6771 2.65616 25.7095 2.59949 25.7197C2.54282 25.7299 2.48441 25.7173 2.43709 25.6844C2.38978 25.6516 2.35745 25.6013 2.34721 25.5446C2.33697 25.488 2.34966 25.4296 2.38249 25.3822L6.79133 15.1944C7.22523 15.9037 7.80513 16.5126 8.49248 16.9805C9.18041 17.4488 9.96018 17.7651 10.7799 17.9086L9.00057 19.6172C9.95578 19.9891 10.9727 20.1805 11.9996 20.1809C12.9723 20.1809 13.9064 20.0132 14.7742 19.7054L9.44255 14.3737L9.45601 14.3662C9.14943 14.0055 8.92171 13.5846 8.78749 13.1306C8.65327 12.6767 8.61552 12.1996 8.67666 11.7302C8.73781 11.2607 8.89649 10.8093 9.14253 10.4048C9.38856 10.0004 9.71649 9.65189 10.1052 9.38175C10.4948 9.11054 10.9363 8.92312 11.402 8.83134C11.8677 8.73956 12.3473 8.74543 12.8106 8.84856C13.2739 8.95169 13.7108 9.14985 14.0935 9.4305C14.4763 9.71115 14.7967 10.0682 15.0343 10.479L15.0478 10.47L18.2755 17.3127C19.5258 15.869 20.2826 13.9908 20.2826 11.9398C20.2826 7.39514 16.5667 3.69869 11.9996 3.69869C7.43254 3.69869 3.71739 7.39514 3.71739 11.9398C3.71836 13.1002 3.96726 14.247 4.44741 15.3034L2.665 19.4247C1.00153 17.3753 0 14.7731 0 11.9398ZM6.79133 15.1944L6.79176 15.1934L6.79026 15.1927C6.79062 15.1933 6.79097 15.1939 6.79133 15.1944Z" fill="white" />
                        </svg>
                      </div>
                      <div className="from-squarespace__product__banner">
                        <div className="from-squarespace__product__banner-title">
                          Acuity Scheduling<span aria-hidden="true" data-arrow="true"><span>→</span></span>
                        </div>
                        <div className="from-squarespace__product__banner-subtitle">
                          The scheduling solution for appointment-based services
                        </div>
                      </div>
                    </a>
                    <a data-identifier="biosites" className="from-squarespace__product" title="Bio.site" href="https://biosites.com/" target="_blank">
                      <div className="from-squarespace__product__logo">
                        <svg width={33} height={25} viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle stroke="none" cx="12.2073" cy="12.2073" r="12.2073" fill="white" />
                          <circle stroke="none" cx="28.3525" cy="20.4768" r="3.93784" fill="white" />
                        </svg>
                      </div>
                      <div className="from-squarespace__product__banner">
                        <div className="from-squarespace__product__banner-title">
                          Bio Sites<span aria-hidden="true" data-arrow="true"><span>→</span></span>
                        </div>
                        <div className="from-squarespace__product__banner-subtitle">
                          Share your online world in one link
                        </div>
                      </div>
                    </a>
                    <a data-identifier="unfold" className="from-squarespace__product" title="Unfold" href="https://unfold.com/" target="_blank">
                      <div className="from-squarespace__product__logo">
                        <svg width={34} height={23} viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" d="M30.7766 3.84273C29.758 2.82524 28.5463 2.01852 27.2117 1.46927C25.8771 0.920019 24.4461 0.63914 23.0015 0.64289H22.9933C22.9797 0.64289 22.9665 0.64289 22.953 0.64289L22.9327 0.64466C22.9202 0.64466 22.9081 0.648201 22.897 0.650326C22.886 0.65245 22.8817 0.65245 22.8738 0.65422C22.866 0.655991 22.8535 0.659177 22.8432 0.66201L22.815 0.6698C22.8068 0.672278 22.799 0.675465 22.7911 0.678652C22.7833 0.681839 22.7687 0.686796 22.758 0.691399C22.7473 0.696002 22.7448 0.697772 22.7384 0.700959C22.732 0.704146 22.7148 0.711936 22.7027 0.718309L22.6967 0.721496L16.993 3.99215L11.3036 0.731764C11.2113 0.678936 11.1067 0.651097 11.0002 0.651034C8.08326 0.650564 5.28557 1.80108 3.22263 3.84949C1.15969 5.89789 0.000472865 8.67639 1.44636e-07 11.5737C-0.000472576 14.4711 1.15784 17.25 3.22011 19.299C5.28239 21.3481 8.0797 22.4995 10.9967 22.5H11.0013C11.0205 22.5 11.0394 22.5 11.0583 22.4972H11.0665C11.0847 22.495 11.1022 22.4922 11.1214 22.4887H11.1275C11.1428 22.4855 11.1582 22.4816 11.1731 22.477L11.1863 22.4731C11.202 22.4681 11.2177 22.4625 11.2334 22.4561L11.2466 22.4501C11.258 22.4451 11.269 22.4398 11.2804 22.4338L11.2965 22.4253L11.304 22.4214L17.0076 19.1504L22.697 22.4132C22.7891 22.4661 22.8936 22.4939 23 22.494C25.1757 22.4943 27.3026 21.8536 29.1116 20.6531C30.9206 19.4526 32.3306 17.7461 33.163 15.7495C33.9955 13.7529 34.2131 11.556 33.7883 9.43653C33.3635 7.31709 32.3154 5.37041 30.7766 3.84273ZM22.3951 2.28477V7.09249L18.2047 4.68933L22.3951 2.28477ZM1.21452 11.5755C1.21437 9.02519 2.22334 6.57697 4.02387 4.75881C5.8244 2.94066 8.27221 1.89823 10.8395 1.85633L21.7798 8.1303L10.6965 14.4868C10.6044 14.5396 10.5279 14.6156 10.4747 14.7071C10.4215 14.7986 10.3935 14.9023 10.3935 15.008V21.277C7.90791 21.1235 5.57473 20.0346 3.86928 18.232C2.16384 16.4294 1.21445 14.0488 1.21452 11.5752V11.5755ZM11.6052 20.8571V16.0504L15.7952 18.4532L11.6052 20.8571ZM29.9193 18.4412C28.1273 20.2311 25.7009 21.2527 23.1597 21.2873L12.2112 15.008L23.1825 8.7163C23.3408 8.62318 23.4528 8.56122 23.5255 8.43587C23.5728 8.35458 23.6002 8.26336 23.6053 8.1696V8.16535C23.6053 8.15615 23.6053 8.14659 23.6053 8.13703C23.6053 8.13313 23.6053 8.12924 23.6053 8.12534V1.86589C25.4854 1.98203 27.2918 2.63469 28.8077 3.74551C30.3235 4.85633 31.4844 6.3781 32.1509 8.12813C32.8174 9.87817 32.9612 11.7821 32.5651 13.6113C32.169 15.4406 31.2498 17.1174 29.9179 18.4404L29.9193 18.4412Z" fill="white" />
                        </svg>
                      </div>
                      <div className="from-squarespace__product__banner">
                        <div className="from-squarespace__product__banner-title">
                          Unfold<span aria-hidden="true" data-arrow="true"><span>→</span></span>
                        </div>
                        <div className="from-squarespace__product__banner-subtitle">
                          Everything to stand out on social
                        </div>
                      </div>
                    </a>
                    <a data-identifier="tock" className="from-squarespace__product" title="Tock" href="https://www.exploretock.com/?utm_source=squarespace&utm_medium=frontsite" target="_blank">
                      <div className="from-squarespace__product__logo">
                        <svg width={27} height={27} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path stroke="none" d="M13.5 21.17C9.23786 21.17 5.78571 17.703 5.78571 13.4225C5.78571 9.81994 8.25428 6.77905 11.5714 5.92683V0.019364C5.03357 0.949063 0 6.60473 0 13.4419C0 20.9376 6.05571 27 13.5 27C16.5279 27 19.3243 25.9928 21.5807 24.3077L17.415 20.1241C16.2579 20.7826 14.9271 21.17 13.5 21.17Z" fill="white" />
                          <path stroke="none" d="M21.2143 13.4225C21.2143 14.8558 20.8286 16.1923 20.1536 17.3544L24.3193 21.538C26.0164 19.2719 27 16.4634 27 13.4225C27 6.58537 21.9664 0.949068 15.4286 0V5.90746C18.7457 6.77905 21.2143 9.81994 21.2143 13.4225Z" fill="white" />
                        </svg>
                      </div>
                      <div className="from-squarespace__product__banner">
                        <div className="from-squarespace__product__banner-title">
                          Tock<span aria-hidden="true" data-arrow="true"><span>→</span></span>
                        </div>
                        <div className="from-squarespace__product__banner-subtitle">
                          The hospitality industry's best platform for reservations and events
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div><a href="/templates" className="www-navigation__mobile__menu-link" data-identifier="templates-cta">Templates</a></div>
            <div className="www-navigation__mobile__menu www-navigation__mobile__menu--resources">
              <button aria-label="Resources dropdown menu">
                <span>Resources</span><svg className="arrow" width={10} height={8} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z" />
                </svg>
              </button>
              <div className="www-navigation__mobile__menu__children" style={{ height: '0px' }}>
                <div className="www-navigation__mobile__menu__children-col">
                  <div className="www-navigation__mobile__menu__child">
                    <a href="/showcase" data-identifier="blog" aria-label="Customer Examples" data-localize="{&quot;id&quot;:&quot;customer-showcase&quot;,&quot;include&quot;:[&quot;en&quot;]}">Made with Squarespace</a>
                  </div>
                  <div className="www-navigation__mobile__menu__child">
                    <a href="/blog" data-identifier="blog" aria-label="Squarespace Blog">Squarespace Blog</a>
                  </div>
                  <div className="www-navigation__mobile__menu__child">
                    <a href="https://support.squarespace.com" data-identifier="support-site" aria-label="Squarespace Help Center" target="_blank" rel="noopener">Help Center</a>
                  </div>
                  <div className="www-navigation__mobile__menu__child">
                    <a href="https://forum.squarespace.com" data-identifier="forum" aria-label="Squarespace Forum" target="_blank" rel="noopener">Forum</a>
                  </div>
                  <div className="www-navigation__mobile__menu__child">
                    <a href="https://learning.squarespace.com/webinars" data-identifier="webinars" aria-label="Squarespace Webinars" target="_blank" rel="noopener">Webinars</a>
                  </div>
                  <div className="www-navigation__mobile__menu__child">
                    <a href="/circle" data-identifier="circle" aria-label="Circle">For Professionals</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="www-navigation__mobile__login">
              <a href="/auth/protected-redirect/login?location=https%3A%2F%2Faccount.squarespace.com" className="www-navigation__mobile__login-button button is-visible">Log In</a>
              <a href="/" className="www-navigation__mobile__logout-button button">Log Out</a>
            </div>
          </div>
          <a className="www-navigation__mobile__cta cta www-navigation__mobile__cta--control" href="/templates" data-object-type="button" data-identifier="cta">
            Get Started
          </a>
        </div>
      </div>
      <div className="www-navigation__desktop">
        <div className="www-navigation__desktop__navigation">
          <div className="www-navigation__desktop__logo-container">
            <a className="www-navigation__desktop__logo" href="/">
              <svg className="squarespace-full is-fill notranslate" xmlns="http://www.w3.org/2000/svg" width="166px" height="24px" viewBox="0 0 500 72">
                <title>Squarespace Logo</title>
                <path d="M18.49 38.15L46.67 10A10.16 10.16 0 0 1 61 10l2.19 2.19 4.39-4.39-2.19-2.2a16.38 16.38 0 0 0-23.14 0L14.09 33.76z" />
                <path d="M56.11 19.27l-4.39-4.39-28.19 28.19A10.15 10.15 0 0 1 9.18 28.71L33.5 4.39 29.11 0 4.79 24.32a16.36 16.36 0 1 0 23.13 23.14zM84.17 24.32a16.39 16.39 0 0 0-23.14 0L32.84 52.51l4.39 4.39 28.19-28.19a10.15 10.15 0 0 1 17.32 7.18 10 10 0 0 1-3 7.18L55.45 67.39l4.4 4.39 24.32-24.32a16.38 16.38 0 0 0 0-23.14z" />
                <path d="M70.47 33.63L42.28 61.81a10.17 10.17 0 0 1-14.36 0l-2.19-2.2L21.34 64l2.19 2.2a16.39 16.39 0 0 0 23.14 0L74.86 38z" />
                <path d="M114.7 43.47a6.71 6.71 0 0 0 2.55 4.2 8.56 8.56 0 0 0 5.29 1.51 7.54 7.54 0 0 0 5-1.49 4.89 4.89 0 0 0 1.76-3.92 4 4 0 0 0-.47-2 4.26 4.26 0 0 0-1.32-1.39 8.39 8.39 0 0 0-2.08-1l-2.78-.84-2.65-.72a24.41 24.41 0 0 1-4.27-1.57 13.2 13.2 0 0 1-3.23-2.16 8.33 8.33 0 0 1-2-2.85 9.33 9.33 0 0 1-.7-3.75 9.45 9.45 0 0 1 .9-4.12 9 9 0 0 1 2.53-3.22 12 12 0 0 1 4-2.11 16.53 16.53 0 0 1 5.26-.77q5.51 0 8.73 2.6a10.27 10.27 0 0 1 3.78 7l-6 .49a6 6 0 0 0-2.18-3.47 7.43 7.43 0 0 0-4.57-1.24 6.57 6.57 0 0 0-4.27 1.26 4 4 0 0 0-1.54 3.25 3.7 3.7 0 0 0 .45 1.91 4.1 4.1 0 0 0 1.29 1.34 9.2 9.2 0 0 0 2.06 1c.81.3 1.73.62 2.75.95l2.54.79q2.37.75 4.29 1.56a12.81 12.81 0 0 1 3.25 2 7.77 7.77 0 0 1 2.06 2.73 9.5 9.5 0 0 1 .72 3.92 10.31 10.31 0 0 1-1 4.54 10 10 0 0 1-2.78 3.5 13.13 13.13 0 0 1-4.25 2.24 17.54 17.54 0 0 1-5.43.79 15.57 15.57 0 0 1-9.18-2.58 11.21 11.21 0 0 1-4.57-7.85zM161.15 17.37a19.2 19.2 0 0 1 7.35 1.36 16.09 16.09 0 0 1 5.65 3.82 17.25 17.25 0 0 1 3.63 5.88 21.17 21.17 0 0 1 1.29 7.5 20.32 20.32 0 0 1-1.37 7.62 17.21 17.21 0 0 1-3.89 5.88l4.76 5.57v1.73h-6l-3.33-4.07a19.13 19.13 0 0 1-3.77 1.34 19.92 19.92 0 0 1-4.27.44 19.24 19.24 0 0 1-7.42-1.44 16 16 0 0 1-5.61-3.83 17 17 0 0 1-3.57-5.85 21.21 21.21 0 0 1-1.27-7.42 21.37 21.37 0 0 1 1.27-7.47 16.89 16.89 0 0 1 3.6-5.86 16.28 16.28 0 0 1 5.63-3.84 18.62 18.62 0 0 1 7.32-1.36zm-.05 5.36a11.15 11.15 0 0 0-4.79 1 10.16 10.16 0 0 0-3.57 2.75 12.33 12.33 0 0 0-2.24 4.16 17.11 17.11 0 0 0-.76 5.22 16.81 16.81 0 0 0 .79 5.26 12.89 12.89 0 0 0 2.26 4.21 10.32 10.32 0 0 0 3.57 2.8 11 11 0 0 0 4.79 1 11.44 11.44 0 0 0 4.79-1 10.09 10.09 0 0 0 3.57-2.71 12.16 12.16 0 0 0 2.26-4.18 17.4 17.4 0 0 0 .8-5.38 17 17 0 0 0-.8-5.3 12.35 12.35 0 0 0-2.26-4.16 10.33 10.33 0 0 0-3.59-2.72 11.35 11.35 0 0 0-4.82-.95zM202.64 49.38a7.63 7.63 0 0 0 6-2.36q2.13-2.35 2.13-7.22V18.06H217V40a19.58 19.58 0 0 1-1 6.62 11.45 11.45 0 0 1-2.83 4.52 11 11 0 0 1-4.51 2.58 22.51 22.51 0 0 1-12 0 10.93 10.93 0 0 1-4.49-2.58 11.56 11.56 0 0 1-2.83-4.52 19.6 19.6 0 0 1-1-6.62V18.06h6.25V39.8q0 4.86 2.14 7.22a7.61 7.61 0 0 0 5.91 2.36zM223.24 52l12.65-33.9h9.38L257.78 52v1.7h-6.15l-3.58-10.18h-15.43L229 53.7h-5.8zm11.26-13.8h11.77l-1.94-5.66c-.76-2.21-1.37-4-1.84-5.41s-.87-2.61-1.24-3.67h-1.53l-.6 1.69c-.2.56-.42 1.19-.67 1.88s-.52 1.49-.82 2.39-.66 1.93-1.09 3.12zM292.72 53.7h-6l-10.87-14h-4v14h-6.16V18.06h11.57a35.57 35.57 0 0 1 5.18.37 10.7 10.7 0 0 1 4.45 1.72q4.22 2.78 4.22 8.38a11.4 11.4 0 0 1-.73 4.24 9.46 9.46 0 0 1-1.91 3.08 10 10 0 0 1-2.75 2.06 14.26 14.26 0 0 1-3.25 1.19L292.72 52zm-20.89-19.36h5.41a10.45 10.45 0 0 0 5.63-1.3 4.67 4.67 0 0 0 2.06-4.26 4.38 4.38 0 0 0-2.09-4.18 11.4 11.4 0 0 0-5.6-1.18h-5.41zM300.66 18.06h23.08v5.46h-17v9.33h15.78v5.36h-15.75v10h17.32v5.49h-23.43zM337.89 43.47a6.71 6.71 0 0 0 2.55 4.2 8.58 8.58 0 0 0 5.29 1.51 7.54 7.54 0 0 0 5-1.49 4.89 4.89 0 0 0 1.76-3.92 4 4 0 0 0-.47-2 4.26 4.26 0 0 0-1.32-1.39 8.39 8.39 0 0 0-2.08-1l-2.78-.84-2.68-.74a24.41 24.41 0 0 1-4.27-1.57 13.2 13.2 0 0 1-3.23-2.16 8.33 8.33 0 0 1-2-2.85 10.12 10.12 0 0 1 .2-7.87 9.11 9.11 0 0 1 2.53-3.22 12 12 0 0 1 4-2.11 16.53 16.53 0 0 1 5.26-.77q5.51 0 8.74 2.6a10.26 10.26 0 0 1 3.77 7l-6 .49a6 6 0 0 0-2.16-3.47 7.41 7.41 0 0 0-4.57-1.24 6.57 6.57 0 0 0-4.27 1.26 4 4 0 0 0-1.53 3.25 3.7 3.7 0 0 0 .44 1.91 4.1 4.1 0 0 0 1.29 1.34 9.2 9.2 0 0 0 2.06 1c.81.3 1.73.62 2.76.95l2.53.79q2.38.75 4.29 1.56a12.81 12.81 0 0 1 3.25 2 7.77 7.77 0 0 1 2.06 2.73 9.5 9.5 0 0 1 .72 3.92 10.31 10.31 0 0 1-1 4.54 9.89 9.89 0 0 1-2.78 3.5A13.18 13.18 0 0 1 351 53.6a17.61 17.61 0 0 1-5.44.79 15.59 15.59 0 0 1-9.18-2.58 11.21 11.21 0 0 1-4.55-7.81zM367.91 18.06h13a18.72 18.72 0 0 1 6.08.85 10.22 10.22 0 0 1 4 2.33 8.6 8.6 0 0 1 2.18 3.5 13.52 13.52 0 0 1 .67 4.34 11.68 11.68 0 0 1-.92 4.84 8.71 8.71 0 0 1-2.65 3.4 12.07 12.07 0 0 1-4.22 2 21.42 21.42 0 0 1-5.61.67h-6.3V53.7h-6.21zm6.21 16.58h5.95a15.52 15.52 0 0 0 3-.27 7.11 7.11 0 0 0 2.38-.91 4.46 4.46 0 0 0 1.59-1.72 5.68 5.68 0 0 0 .57-2.66 5.93 5.93 0 0 0-.57-2.73 4.44 4.44 0 0 0-1.57-1.75 6.79 6.79 0 0 0-2.35-.91 15.29 15.29 0 0 0-3-.27h-6.05zM395.56 52l12.66-33.9h9.38L430.1 52v1.7H424l-3.57-10.18h-15.49l-3.57 10.18h-5.81zm11.27-13.8h11.76l-1.94-5.66c-.76-2.21-1.37-4-1.83-5.41l-1.24-3.67H412l-.6 1.69c-.2.56-.42 1.19-.67 1.88s-.52 1.49-.82 2.39-.66 1.93-1.09 3.12zM467.92 44.27a17.81 17.81 0 0 1-2.2 3.92 14.89 14.89 0 0 1-3.31 3.22 15.63 15.63 0 0 1-4.49 2.18 19.06 19.06 0 0 1-5.68.8A18.12 18.12 0 0 1 445 53a16.19 16.19 0 0 1-5.55-3.84 17.08 17.08 0 0 1-3.55-5.86 21.28 21.28 0 0 1-1.25-7.37 21.23 21.23 0 0 1 1.25-7.37 17 17 0 0 1 3.57-5.88 16.52 16.52 0 0 1 5.58-3.9 18.06 18.06 0 0 1 7.27-1.41 16.82 16.82 0 0 1 9.8 2.73 14.75 14.75 0 0 1 5.59 7.24l-6.31 1.24a10.41 10.41 0 0 0-3.6-4.29 9.74 9.74 0 0 0-5.58-1.56 10.43 10.43 0 0 0-4.69 1 10.15 10.15 0 0 0-3.47 2.79 12.43 12.43 0 0 0-2.16 4.21 17.41 17.41 0 0 0-.75 5.19 17.1 17.1 0 0 0 .77 5.22 12.36 12.36 0 0 0 2.23 4.15 10.37 10.37 0 0 0 3.57 2.71 11 11 0 0 0 4.77 1 9.3 9.3 0 0 0 5.73-1.69 11.64 11.64 0 0 0 3.5-4.12zM476.31 18.06h23.08v5.46h-17v9.33h15.81v5.36h-15.78v10h17.32v5.49h-23.43z" />
              </svg>
            </a>
          </div>
          <div className="www-navigation__desktop__menu-bar">
            <button aria-label="Products dropdown menu" className><span>Products</span><svg className="arrow" width={10} height={8} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z" />
            </svg>
            </button>
            <a href="/templates" data-identifier="templates-cta">Templates</a>
            <button aria-label="Resources dropdown menu"><span>Resources</span><svg className="arrow" width={10} height={8} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z" />
            </svg>
            </button>
          </div>
          <div className="www-navigation__desktop__account-container">
            <div className="www-navigation__desktop__account-info is-visible">
              <div className="www-navigation__desktop__account-info__logged-out is-visible">
                <a href="/auth/protected-redirect/login?location=https%3A%2F%2Faccount.squarespace.com" className="www-navigation__desktop__account-info__login-button">Log
                  In</a>
              </div>
              <div className="www-navigation__desktop__account-info__logged-in">
                <button className="www-navigation__desktop__account-info__logged-in__avatar-wrapper" type="button" aria-expanded="false" aria-label="Account information dropdown menu" aria-controls="navigation-auth-menu-desktop-wrapper">
                  <div className="www-navigation__desktop__account-info__logged-in__avatar">
                    <span className="www-navigation__desktop__account-info__logged-in__initials" />
                  </div>
                  <svg className="arrow" width={10} height={8} viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.5L-1.09278e-07 3L5 8L10 3L10 0.5L5 5.5L0 0.5Z" />
                  </svg>
                </button>
                <div id="navigation-auth-menu-desktop-wrapper" className="www-navigation__desktop__account-info__menu-wrapper" style={{ top: '80px', left: '-40px' }}>
                  <div className="www-navigation__desktop__account-info__menu">
                    <div className="www-navigation__desktop__account-info__menu__caret" style={{ left: '0px' }} />
                    <div className="www-navigation__desktop__account-info__menu__name" />
                    <div className="www-navigation__desktop__account-info__menu__email" />
                    <a className="www-navigation__desktop__account-info__menu__dashboard-link" href="https://account.squarespace.com/">
                      Account Dashboard
                    </a>
                    <a className="www-navigation__desktop__account-info__menu__domains-link" href="https://account.squarespace.com/domains">
                      Domains
                    </a>
                    <a href="/" className="www-navigation__desktop__account-info__menu__logout">Log Out</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a className="www-navigation__desktop__cta cta is-visible" href="/templates" data-object-type="button" data-identifier="cta">
                Get Started
              </a>
            </div>
          </div>
        </div>
        <div className="www-navigation__desktop__menus" data-active-resource-index={0} data-transition-dir="null" style={{ height: '653px' }}>
          <div className="www-navigation__desktop__menus__top-offset" style={{ top: '-81px' }}>
            <div className="www-navigation__desktop__menu www-navigation__desktop__menu--explore">
              <div className="www-navigation__desktop__menu__vertical-motion">
                <div className="www-navigation__desktop__menu__shell">
                  <div className="www-navigation__desktop__menu__col">
                    <h3>Create a website</h3>
                    <a href="/website-design" data-identifier="website-parent">Website Overview<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/websites/designer-templates" data-identifier="website-web-design">Website Templates<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/websites/create-a-portfolio" data-identifier="website-portfolios">For Portfolios<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/websites/create-a-blog" data-identifier="website-blogging">For Blogs<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/websites/analytics" data-identifier="website-analytics">Analytics<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/designer/home?channel=sqsp_circle&subchannel=frontsite_header_nav&utm_medium=sqsp_circle&utm_source=frontsite_header_nav" data-identifier="difm">Hire an Expert<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/enterprise" data-identifier="enterprise-solutions">Enterprise Solutions<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <h3>Get a Domain</h3>
                    <a href="https://domains.squarespace.com" data-identifier="domains-parent">Find a Domain<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="https://domains.squarespace.com/transfer-a-domain" data-identifier="domains-transfer">Transfer a Domain<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                  </div>
                  <div className="www-navigation__desktop__menu__col">
                    <h3>Sell Anything</h3>
                    <a href="/ecommerce-website" data-identifier="commerce-parent">Ecommerce Overview<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/designs-that-sell" data-identifier="commerce-designs">Templates for Sellers<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/sell-products" data-identifier="commerce-sell-products">Sell Products<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/sell-services" data-identifier="commerce-sell-services">Sell Services<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/scheduling" data-identifier="commerce-scheduling">Schedule Appointments<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/online-courses" data-identifier="commerce-online-courses">Courses<div className="www-navigation__new-badge">New</div><span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/project-management" data-identifier="commerce-project-management">Project Management<div className="www-navigation__new-badge">New</div><span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/membership-sites" data-identifier="commerce-member-areas">Memberships<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/ecommerce/store-management" data-identifier="store-management">Store Management<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/extensions/home" data-identifier="extensions">Commerce Extensions<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                  </div>
                  <div className="www-navigation__desktop__menu__col">
                    <h3>Build your Brand</h3>
                    <a href="/website-marketing" data-identifier="marketing-parent">Marketing Overview<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/email-marketing" data-identifier="marketing-email-campaigns">Email Marketing<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/marketing/seo" data-identifier="marketing-seo">SEO Tools<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/creators" data-identifier="creators">Creator Tools<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                    <a href="/logo" data-identifier="logo-maker">Logo Maker<span aria-hidden="true" data-arrow="true"><span>→</span></span></a>
                  </div>
                  <div className="www-navigation__desktop__menu__col">
                    <h3>From Squarespace</h3>
                    <div className="from-squarespace">
                      <a data-identifier="acuity" className="from-squarespace__product" title="Acuity" href="https://acuityscheduling.com/" target="_blank">
                        <div className="from-squarespace__product__logo">
                          <svg width={24} height={28} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" fillRule="evenodd" clipRule="evenodd" d="M0 11.9398C0 5.35544 5.38386 0 11.9996 0C18.6169 0 24 5.35619 24 11.9398C24 15.4903 22.4347 18.6835 19.9546 20.8724L22.8536 27.018C22.8871 27.0781 22.8971 27.1484 22.8816 27.2154C22.8661 27.2823 22.8263 27.3412 22.7698 27.3804C22.7133 27.4196 22.6443 27.4363 22.5761 27.4274C22.508 27.4185 22.4456 27.3846 22.4011 27.3322L17.5783 22.5094C15.9107 23.3842 14.0123 23.8796 11.9996 23.8796C9.93848 23.8819 7.92426 23.3527 6.14515 22.3592L2.73927 25.6298C2.70644 25.6771 2.65616 25.7095 2.59949 25.7197C2.54282 25.7299 2.48441 25.7173 2.43709 25.6844C2.38978 25.6516 2.35745 25.6013 2.34721 25.5446C2.33697 25.488 2.34966 25.4296 2.38249 25.3822L6.79133 15.1944C7.22523 15.9037 7.80513 16.5126 8.49248 16.9805C9.18041 17.4488 9.96018 17.7651 10.7799 17.9086L9.00057 19.6172C9.95578 19.9891 10.9727 20.1805 11.9996 20.1809C12.9723 20.1809 13.9064 20.0132 14.7742 19.7054L9.44255 14.3737L9.45601 14.3662C9.14943 14.0055 8.92171 13.5846 8.78749 13.1306C8.65327 12.6767 8.61552 12.1996 8.67666 11.7302C8.73781 11.2607 8.89649 10.8093 9.14253 10.4048C9.38856 10.0004 9.71649 9.65189 10.1052 9.38175C10.4948 9.11054 10.9363 8.92312 11.402 8.83134C11.8677 8.73956 12.3473 8.74543 12.8106 8.84856C13.2739 8.95169 13.7108 9.14985 14.0935 9.4305C14.4763 9.71115 14.7967 10.0682 15.0343 10.479L15.0478 10.47L18.2755 17.3127C19.5258 15.869 20.2826 13.9908 20.2826 11.9398C20.2826 7.39514 16.5667 3.69869 11.9996 3.69869C7.43254 3.69869 3.71739 7.39514 3.71739 11.9398C3.71836 13.1002 3.96726 14.247 4.44741 15.3034L2.665 19.4247C1.00153 17.3753 0 14.7731 0 11.9398ZM6.79133 15.1944L6.79176 15.1934L6.79026 15.1927C6.79062 15.1933 6.79097 15.1939 6.79133 15.1944Z" fill="white" />
                          </svg>
                        </div>
                        <div className="from-squarespace__product__banner">
                          <div className="from-squarespace__product__banner-title">
                            Acuity Scheduling<span aria-hidden="true" data-arrow="true"><span>→</span></span>
                          </div>
                          <div className="from-squarespace__product__banner-subtitle">
                            The scheduling solution for appointment-based services
                          </div>
                        </div>
                      </a>
                      <a data-identifier="biosites" className="from-squarespace__product" title="Bio.site" href="https://biosites.com/" target="_blank">
                        <div className="from-squarespace__product__logo">
                          <svg width={33} height={25} viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle stroke="none" cx="12.2073" cy="12.2073" r="12.2073" fill="white" />
                            <circle stroke="none" cx="28.3525" cy="20.4768" r="3.93784" fill="white" />
                          </svg>
                        </div>
                        <div className="from-squarespace__product__banner">
                          <div className="from-squarespace__product__banner-title">
                            Bio Sites<span aria-hidden="true" data-arrow="true"><span>→</span></span>
                          </div>
                          <div className="from-squarespace__product__banner-subtitle">
                            Share your online world in one link
                          </div>
                        </div>
                      </a>
                      <a data-identifier="unfold" className="from-squarespace__product" title="Unfold" href="https://unfold.com/" target="_blank">
                        <div className="from-squarespace__product__logo">
                          <svg width={34} height={23} viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M30.7766 3.84273C29.758 2.82524 28.5463 2.01852 27.2117 1.46927C25.8771 0.920019 24.4461 0.63914 23.0015 0.64289H22.9933C22.9797 0.64289 22.9665 0.64289 22.953 0.64289L22.9327 0.64466C22.9202 0.64466 22.9081 0.648201 22.897 0.650326C22.886 0.65245 22.8817 0.65245 22.8738 0.65422C22.866 0.655991 22.8535 0.659177 22.8432 0.66201L22.815 0.6698C22.8068 0.672278 22.799 0.675465 22.7911 0.678652C22.7833 0.681839 22.7687 0.686796 22.758 0.691399C22.7473 0.696002 22.7448 0.697772 22.7384 0.700959C22.732 0.704146 22.7148 0.711936 22.7027 0.718309L22.6967 0.721496L16.993 3.99215L11.3036 0.731764C11.2113 0.678936 11.1067 0.651097 11.0002 0.651034C8.08326 0.650564 5.28557 1.80108 3.22263 3.84949C1.15969 5.89789 0.000472865 8.67639 1.44636e-07 11.5737C-0.000472576 14.4711 1.15784 17.25 3.22011 19.299C5.28239 21.3481 8.0797 22.4995 10.9967 22.5H11.0013C11.0205 22.5 11.0394 22.5 11.0583 22.4972H11.0665C11.0847 22.495 11.1022 22.4922 11.1214 22.4887H11.1275C11.1428 22.4855 11.1582 22.4816 11.1731 22.477L11.1863 22.4731C11.202 22.4681 11.2177 22.4625 11.2334 22.4561L11.2466 22.4501C11.258 22.4451 11.269 22.4398 11.2804 22.4338L11.2965 22.4253L11.304 22.4214L17.0076 19.1504L22.697 22.4132C22.7891 22.4661 22.8936 22.4939 23 22.494C25.1757 22.4943 27.3026 21.8536 29.1116 20.6531C30.9206 19.4526 32.3306 17.7461 33.163 15.7495C33.9955 13.7529 34.2131 11.556 33.7883 9.43653C33.3635 7.31709 32.3154 5.37041 30.7766 3.84273ZM22.3951 2.28477V7.09249L18.2047 4.68933L22.3951 2.28477ZM1.21452 11.5755C1.21437 9.02519 2.22334 6.57697 4.02387 4.75881C5.8244 2.94066 8.27221 1.89823 10.8395 1.85633L21.7798 8.1303L10.6965 14.4868C10.6044 14.5396 10.5279 14.6156 10.4747 14.7071C10.4215 14.7986 10.3935 14.9023 10.3935 15.008V21.277C7.90791 21.1235 5.57473 20.0346 3.86928 18.232C2.16384 16.4294 1.21445 14.0488 1.21452 11.5752V11.5755ZM11.6052 20.8571V16.0504L15.7952 18.4532L11.6052 20.8571ZM29.9193 18.4412C28.1273 20.2311 25.7009 21.2527 23.1597 21.2873L12.2112 15.008L23.1825 8.7163C23.3408 8.62318 23.4528 8.56122 23.5255 8.43587C23.5728 8.35458 23.6002 8.26336 23.6053 8.1696V8.16535C23.6053 8.15615 23.6053 8.14659 23.6053 8.13703C23.6053 8.13313 23.6053 8.12924 23.6053 8.12534V1.86589C25.4854 1.98203 27.2918 2.63469 28.8077 3.74551C30.3235 4.85633 31.4844 6.3781 32.1509 8.12813C32.8174 9.87817 32.9612 11.7821 32.5651 13.6113C32.169 15.4406 31.2498 17.1174 29.9179 18.4404L29.9193 18.4412Z" fill="white" />
                          </svg>
                        </div>
                        <div className="from-squarespace__product__banner">
                          <div className="from-squarespace__product__banner-title">
                            Unfold<span aria-hidden="true" data-arrow="true"><span>→</span></span>
                          </div>
                          <div className="from-squarespace__product__banner-subtitle">
                            Everything to stand out on social
                          </div>
                        </div>
                      </a>
                      <a data-identifier="tock" className="from-squarespace__product" title="Tock" href="https://www.exploretock.com/?utm_source=squarespace&utm_medium=frontsite" target="_blank">
                        <div className="from-squarespace__product__logo">
                          <svg width={27} height={27} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M13.5 21.17C9.23786 21.17 5.78571 17.703 5.78571 13.4225C5.78571 9.81994 8.25428 6.77905 11.5714 5.92683V0.019364C5.03357 0.949063 0 6.60473 0 13.4419C0 20.9376 6.05571 27 13.5 27C16.5279 27 19.3243 25.9928 21.5807 24.3077L17.415 20.1241C16.2579 20.7826 14.9271 21.17 13.5 21.17Z" fill="white" />
                            <path stroke="none" d="M21.2143 13.4225C21.2143 14.8558 20.8286 16.1923 20.1536 17.3544L24.3193 21.538C26.0164 19.2719 27 16.4634 27 13.4225C27 6.58537 21.9664 0.949068 15.4286 0V5.90746C18.7457 6.77905 21.2143 9.81994 21.2143 13.4225Z" fill="white" />
                          </svg>
                        </div>
                        <div className="from-squarespace__product__banner">
                          <div className="from-squarespace__product__banner-title">
                            Tock<span aria-hidden="true" data-arrow="true"><span>→</span></span>
                          </div>
                          <div className="from-squarespace__product__banner-subtitle">
                            The hospitality industry's best platform for reservations and events
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="www-navigation__desktop__menu www-navigation__desktop__menu--resources">
              <div className="www-navigation__desktop__menu__vertical-motion">
                <div className="www-navigation__desktop__menu__shell">
                  <div className="www-navigation__desktop__menu__col">
                    <div className="www-navigation__desktop__menu__resource-links">
                      <a href="/showcase" data-identifier="customer-showcase" data-localize="{&quot;id&quot;:&quot;customer-showcase&quot;,&quot;include&quot;:[&quot;en&quot;]}">
                        <h3>Made with Squarespace<span aria-hidden="true" data-arrow="true"><span>→</span></span></h3>
                      </a>
                      <a href="/blog" data-identifier="blog">
                        <h3>Squarespace Blog<span aria-hidden="true" data-arrow="true"><span>→</span></span></h3>
                      </a>
                      <a href="https://support.squarespace.com" data-identifier="support-site" target="_blank" rel="noopener">
                        <h3>Help Center<span aria-hidden="true" data-arrow="true"><span>→</span></span></h3>
                      </a>
                      <a href="https://forum.squarespace.com" data-identifier="forum" target="_blank" rel="noopener">
                        <h3>Forum<span aria-hidden="true" data-arrow="true"><span>→</span></span></h3>
                      </a>
                      <a href="https://learning.squarespace.com/webinars" data-identifier="webinars" target="_blank" rel="noopener">
                        <h3>Webinars<span aria-hidden="true" data-arrow="true"><span>→</span></span></h3>
                      </a>
                      <a href="/circle" data-identifier="circle">
                        <h3>For Professionals<span aria-hidden="true" data-arrow="true"><span>→</span></span></h3>
                      </a>
                    </div>
                    <div className="www-navigation__desktop__menu__resource-descriptions">
                      <p className="www-navigation__desktop__menu__resource-descriptions__customer-examples" data-localize="{&quot;id&quot;:&quot;customer-showcase&quot;,&quot;include&quot;:[&quot;en&quot;]}">A collection of inspirational websites made by real Squarespace users.</p>
                      <p className="www-navigation__desktop__menu__resource-descriptions__blog">Stories and solutions for the modern entrepreneur.</p>
                      <p className="www-navigation__desktop__menu__resource-descriptions__help-center">In-depth guides and videos about the platform, our services, and how to get started.</p>
                      <p className="www-navigation__desktop__menu__resource-descriptions__forum">An online community for Squarespace users and professionals to discuss best practices and seek advice.</p>
                      <p className="www-navigation__desktop__menu__resource-descriptions__webinars">Free, online sessions where you’ll learn the basics and refine your Squarespace skills.</p>
                      <p className="www-navigation__desktop__menu__resource-descriptions__circle">Earn rewards for building custom websites your clients can easily manage with Circle.</p>
                    </div>
                  </div>
                  <div className="www-navigation__desktop__menu__col">
                    <div className="www-navigation__desktop__menu__image-wrapper" data-localize="{&quot;id&quot;:&quot;customer-showcase&quot;,&quot;include&quot;:[&quot;en&quot;]}">
                      <img data-src="https://media-www.sqspcdn.com/images/site-navigation/drinkminna-1000w.jpg" alt="Showcase" src="https://media-www.sqspcdn.com/images/site-navigation/drinkminna-1000w.jpg" />
                    </div>
                    <div className="www-navigation__desktop__menu__image-wrapper">
                      <img data-src="https://media-www.sqspcdn.com/images/site-navigation/blog-2-1000w.jpg" alt="Blog" src="https://media-www.sqspcdn.com/images/site-navigation/blog-2-1000w.jpg" />
                    </div>
                    <div className="www-navigation__desktop__menu__image-wrapper">
                      <img data-src="https://media-www.sqspcdn.com/images/site-navigation/help-2-1000w.jpg" alt="Help" src="https://media-www.sqspcdn.com/images/site-navigation/help-2-1000w.jpg" />
                    </div>
                    <div className="www-navigation__desktop__menu__image-wrapper">
                      <img data-src="https://media-www.sqspcdn.com/images/site-navigation/forum-2-1000w.jpg" alt="Forum" src="https://media-www.sqspcdn.com/images/site-navigation/forum-2-1000w.jpg" />
                    </div>
                    <div className="www-navigation__desktop__menu__image-wrapper">
                      <img data-src="https://media-www.sqspcdn.com/images/site-navigation/webinars-2-1000w.jpg" alt="Webinars" src="https://media-www.sqspcdn.com/images/site-navigation/webinars-2-1000w.jpg" />
                    </div>
                    <div className="www-navigation__desktop__menu__image-wrapper">
                      <img data-src="https://media-www.sqspcdn.com/images/site-navigation/circle-1-1000w.jpg" alt="Circle" src="https://media-www.sqspcdn.com/images/site-navigation/circle-1-1000w.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="www-navigation__desktop__hover-region" />
      </div>
    </nav>
  )
}

export default Firstsection
