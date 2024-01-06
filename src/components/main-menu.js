import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'

import './main-menu.css'

const MainMenu = (props) => {

  const location = useLocation();
  const pathname = location.pathname;

  const [isOnUser, setIsOnUser] = useState(true)

  if (pathname === '/gestione-utente') {
    return (
      <nav
        id="buttons-login"
        className={`main-menu-container ${props.rootClassName} `}
      >
        <div className="main-menu-menubar-user">
          <div className="main-menu-ellipsecircle transition">
            <img
              alt="Ellipse12545"
              src="/external/ellipse12545-cokj.svg"
              className="main-menu-ellipse1"
            />
            <img
              alt="menucircle2595"
              src="/external/menucircle2595-lmu.svg"
              className="main-menu-menucircle"
            />
          </div>
          <Link to="/navigazione-mappa" className="">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="main-menu-usericon1"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/gestione-itinerari" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-itineraryicon1">
              <path
                d="M298.667 158.848v584.405l-213.333 121.899v-584.405zM725.333 865.152v-584.405l213.333-121.899v584.363zM662.827 976.427c3.499 1.835 7.253 3.2 11.264 4.011 2.816 0.597 5.717 0.896 8.576 0.896 7.381 0 14.677-1.963 21.163-5.632l0.64-0.384 298.027-170.283c13.696-7.808 21.419-22.101 21.504-37.035v-682.667c0-23.552-19.115-42.667-42.667-42.667-7.808 0-15.104 2.091-21.163 5.632l-278.827 159.317-320.128-160.085c-3.541-1.792-7.296-3.2-11.264-4.011-2.859-0.555-5.76-0.853-8.619-0.853-7.424 0-14.72 1.963-21.163 5.632l-0.64 0.341-298.027 170.325c-13.696 7.808-21.419 22.101-21.504 37.035v682.667c0 23.552 19.115 42.667 42.667 42.667 7.808 0 15.104-2.091 21.163-5.632l278.827-159.317zM640 282.368v587.264l-256-128v-587.264z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/gestione-preferiti" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-favoritesicon1">
              <path
                d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/visualizza-eventi" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-eventsicon1">
              <path
                d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"
                className=""
              ></path>
            </svg>
          </Link>
        </div>
      </nav>
    )
  }


  if (pathname === '/gestione-itinerari') {
    return (
      <nav
        id="buttons-login"
        className={`main-menu-container ${props.rootClassName} `}
      >
        <div className="main-menu-menubar-itinerary">
          <div className="main-menu-ellipsecircle1">
            <img
              alt="Ellipse12316"
              src="/external/ellipse12316-4sr.svg"
              className="main-menu-ellipse11"
            />
            <img
              alt="menucircle2312"
              src="/external/menucircle2312-x75k.svg"
              className="main-menu-menucircle1"
            />
          </div>
          <Link to="/gestione-utente" className="">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="main-menu-usericon2"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/navigazione-mappa" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-itineraryicon2">
              <path
                d="M298.667 158.848v584.405l-213.333 121.899v-584.405zM725.333 865.152v-584.405l213.333-121.899v584.363zM662.827 976.427c3.499 1.835 7.253 3.2 11.264 4.011 2.816 0.597 5.717 0.896 8.576 0.896 7.381 0 14.677-1.963 21.163-5.632l0.64-0.384 298.027-170.283c13.696-7.808 21.419-22.101 21.504-37.035v-682.667c0-23.552-19.115-42.667-42.667-42.667-7.808 0-15.104 2.091-21.163 5.632l-278.827 159.317-320.128-160.085c-3.541-1.792-7.296-3.2-11.264-4.011-2.859-0.555-5.76-0.853-8.619-0.853-7.424 0-14.72 1.963-21.163 5.632l-0.64 0.341-298.027 170.325c-13.696 7.808-21.419 22.101-21.504 37.035v682.667c0 23.552 19.115 42.667 42.667 42.667 7.808 0 15.104-2.091 21.163-5.632l278.827-159.317zM640 282.368v587.264l-256-128v-587.264z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/gestione-preferiti" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-favoritesicon2">
              <path
                d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/visualizza-eventi" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-eventsicon2">
              <path
                d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"
                className=""
              ></path>
            </svg>
          </Link>
        </div>
      </nav>
    )
  }


  if (pathname === '/gestione-preferiti') {
    return (
      <nav
        id="buttons-login"
        className={`main-menu-container ${props.rootClassName} `}
      >
        <div className="main-menu-menubar-favorites">
          <div className="main-menu-ellipsecircle2">
            <img
              alt="Ellipse12554"
              src="/external/ellipse12554-ncme.svg"
              className="main-menu-ellipse12"
            />
            <img
              alt="menucircle2555"
              src="/external/menucircle2555-4rxk.svg"
              className="main-menu-menucircle2"
            />
          </div>
          <Link to="/gestione-utente" className="">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="main-menu-usericon3"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/gestione-itinerari" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-itineraryicon3">
              <path
                d="M298.667 158.848v584.405l-213.333 121.899v-584.405zM725.333 865.152v-584.405l213.333-121.899v584.363zM662.827 976.427c3.499 1.835 7.253 3.2 11.264 4.011 2.816 0.597 5.717 0.896 8.576 0.896 7.381 0 14.677-1.963 21.163-5.632l0.64-0.384 298.027-170.283c13.696-7.808 21.419-22.101 21.504-37.035v-682.667c0-23.552-19.115-42.667-42.667-42.667-7.808 0-15.104 2.091-21.163 5.632l-278.827 159.317-320.128-160.085c-3.541-1.792-7.296-3.2-11.264-4.011-2.859-0.555-5.76-0.853-8.619-0.853-7.424 0-14.72 1.963-21.163 5.632l-0.64 0.341-298.027 170.325c-13.696 7.808-21.419 22.101-21.504 37.035v682.667c0 23.552 19.115 42.667 42.667 42.667 7.808 0 15.104-2.091 21.163-5.632l278.827-159.317zM640 282.368v587.264l-256-128v-587.264z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/navigazione-mappa" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-favoritesicon3">
              <path
                d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/visualizza-eventi" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-eventsicon3">
              <path
                d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"
                className=""
              ></path>
            </svg>
          </Link>
        </div>
      </nav>
    )
  }


  if (pathname === '/visualizza-eventi') {
    return (
      <nav
        id="buttons-login"
        className={`main-menu-container ${props.rootClassName} `}
      >
        <div className="main-menu-menubar-events">
          <div className="main-menu-ellipsecircle3">
            <img
              alt="Ellipse12563"
              src="/external/ellipse12563-4lqq.svg"
              className="main-menu-ellipse13"
            />
            <img
              alt="menucircle2564"
              src="/external/menucircle2564-wwk.svg"
              className="main-menu-menucircle3"
            />
          </div>
          <Link to="/gestione-utente" className="">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="main-menu-usericon4"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/gestione-itinerari" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-itineraryicon4">
              <path
                d="M298.667 158.848v584.405l-213.333 121.899v-584.405zM725.333 865.152v-584.405l213.333-121.899v584.363zM662.827 976.427c3.499 1.835 7.253 3.2 11.264 4.011 2.816 0.597 5.717 0.896 8.576 0.896 7.381 0 14.677-1.963 21.163-5.632l0.64-0.384 298.027-170.283c13.696-7.808 21.419-22.101 21.504-37.035v-682.667c0-23.552-19.115-42.667-42.667-42.667-7.808 0-15.104 2.091-21.163 5.632l-278.827 159.317-320.128-160.085c-3.541-1.792-7.296-3.2-11.264-4.011-2.859-0.555-5.76-0.853-8.619-0.853-7.424 0-14.72 1.963-21.163 5.632l-0.64 0.341-298.027 170.325c-13.696 7.808-21.419 22.101-21.504 37.035v682.667c0 23.552 19.115 42.667 42.667 42.667 7.808 0 15.104-2.091 21.163-5.632l278.827-159.317zM640 282.368v587.264l-256-128v-587.264z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/gestione-preferiti" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-favoritesicon4">
              <path
                d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/navigazione-mappa" className="">
            <svg viewBox="0 0 1024 1024" className="main-menu-eventsicon4">
              <path
                d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"
                className=""
              ></path>
            </svg>
          </Link>
        </div>
      </nav>
    )
  }


  if (pathname === '/navigazione-mappa') {
    return (
      <nav
        id="buttons-login"
        className={`main-menu-container ${props.rootClassName} `}
      >
        <div className="main-menu-menubar-default">
          <Link to="/gestione-utente" className="main-menu-navlink">
            <svg
              viewBox="0 0 731.4285714285713 1024"
              className="main-menu-usericon"
            >
              <path
                d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/gestione-itinerari" className="main-menu-navlink01">
            <svg viewBox="0 0 1024 1024" className="main-menu-itineraryicon">
              <path
                d="M298.667 158.848v584.405l-213.333 121.899v-584.405zM725.333 865.152v-584.405l213.333-121.899v584.363zM662.827 976.427c3.499 1.835 7.253 3.2 11.264 4.011 2.816 0.597 5.717 0.896 8.576 0.896 7.381 0 14.677-1.963 21.163-5.632l0.64-0.384 298.027-170.283c13.696-7.808 21.419-22.101 21.504-37.035v-682.667c0-23.552-19.115-42.667-42.667-42.667-7.808 0-15.104 2.091-21.163 5.632l-278.827 159.317-320.128-160.085c-3.541-1.792-7.296-3.2-11.264-4.011-2.859-0.555-5.76-0.853-8.619-0.853-7.424 0-14.72 1.963-21.163 5.632l-0.64 0.341-298.027 170.325c-13.696 7.808-21.419 22.101-21.504 37.035v682.667c0 23.552 19.115 42.667 42.667 42.667 7.808 0 15.104-2.091 21.163-5.632l278.827-159.317zM640 282.368v587.264l-256-128v-587.264z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/gestione-preferiti" className="main-menu-navlink02">
            <svg viewBox="0 0 1024 1024" className="main-menu-favoritesicon">
              <path
                d="M512 950.857c-9.143 0-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429 0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286z"
                className=""
              ></path>
            </svg>
          </Link>
          <Link to="/visualizza-eventi" className="main-menu-navlink03">
            <svg viewBox="0 0 1024 1024" className="main-menu-eventsicon">
              <path
                d="M598 598v84h-300v-84h300zM810 810v-468h-596v468h596zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-34 25-60t61-26h42v-86h86v86h340v-86h86v86h42zM726 426v86h-428v-86h428z"
                className=""
              ></path>
            </svg>
          </Link>
        </div>
      </nav>
    )
  }
}

MainMenu.defaultProps = {
  rootClassName: '',
  menubar_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/845d69ee-3bfd-4357-9c75-cfcd407d59a6/f1f8d502-633c-4472-8446-dd9e09474b9e?org_if_sml=1594&force_format=original',
  menucomponent_src1: 'f6886bb1-c11c-410a-a4b7-666c3fbc952f',
  menubar_alt: 'menubar2543',
}

MainMenu.propTypes = {
  rootClassName: PropTypes.string,
  menubar_src: PropTypes.string,
  menucomponent_src1: PropTypes.string,
  menubar_alt: PropTypes.string,
}

export default MainMenu
