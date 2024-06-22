import React, { useEffect, useContext } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import { useState } from 'react';
import { MyContext } from '../../../App';

const Nav = (props) => {


    const [navData, setNavData] = useState([]);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openDropdownMenu, setDropdownMenu] = useState(false);
    const [openDropdownMenuIndex, setDropdownMenuIndex] = useState(null);

    const [openMegaMenu, setOpenMegaMenu] = useState(false);

    const context = useContext(MyContext);

    useEffect(() => {
        setNavData(props.data);
    }, [])

    useEffect(() => {
        setIsOpenNav(props.openNav)
    }, [props.openNav])


    const closeNav=()=>{
        props.closeNav();
    }

    const openDropdownFun=(index)=>{
        setDropdownMenu(!openDropdownMenu)
        setDropdownMenuIndex(index)
    }

    return (
      <>
        {isOpenNav === true && (
          <div className="navbarOverlay" onClick={props.closeNav}></div>
        )}
        <div
          className={`nav d-flex align-items-center ${
            isOpenNav === true && "click"
          }`}
        >
          <div className="container-fluid">
            <div className="row position-relative text-center">
              <div className="col-sm-8  w-100">
                <nav className={isOpenNav === true ? "open" : ""}>
                  <ul className="list list-inline mb-0">
                    <li className="list-inline-item">
                      <Button>
                        <Link to={"/"} onClick={props.closeNav}>
                          Home
                        </Link>
                      </Button>
                    </li>

                    {navData.length !== 0 &&
                      navData.map((item, index) => {
                        return (
                          <li className="list-inline-item" key={index}>
                            <Button onClick={() => openDropdownFun(index)}>
                              <a
                                href={`${
                                  windowWidth > 992
                                    ? `/cat/${item.cat_name.toLowerCase()}`
                                    : "#"
                                }`}
                                onClick={() =>
                                  sessionStorage.setItem(
                                    "cat",
                                    item.cat_name.toLowerCase()
                                  )
                                }
                              >Shopping
                                <KeyboardArrowDownIcon
                                  className={`${
                                    openDropdownMenu === true &&
                                    openDropdownMenuIndex === index &&
                                    "rotateIcon"
                                  }`}
                                />
                              </a>
                            </Button>
                            {item.items.length !== 0 && (
                              <div
                                className={`dropdown_menu ${
                                  openDropdownMenu === true &&
                                  openDropdownMenuIndex === index &&
                                  "open"
                                }`}
                              >
                                <ul>
                                  {item.items.map((item_, index_) => {
                                    return (
                                      <li key={index_}>
                                        <Button onClick={props.closeNav}>
                                          <a
                                            href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name
                                              .replace(/\s/g, "-")
                                              .toLowerCase()}`}
                                            onClick={() =>
                                              sessionStorage.setItem(
                                                "cat",
                                                item.cat_name.toLowerCase()
                                              )
                                            }
                                          >
                                            {item_.cat_name}
                                          </a>
                                        </Button>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}

                    <li className="list-inline-item">
                      <Button onClick={props.closeNav}>
                        <Link>About</Link>
                      </Button>
                    </li>

                    <li className="list-inline-item">
                      <Button>
                        <Link>Blog</Link>
                      </Button>
                    </li>
                    {/* <li className='list-inline-item'>
                                        <Button><Link>Pages  <KeyboardArrowDownIcon /></Link>
                                        </Button>

                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li><Button><Link to="/about">About Us</Link></Button></li>
                                                <li><Button><Link to="/about">Contact</Link></Button></li>
                                                <li><Button><Link to="/about">My Account</Link></Button></li>
                                                <li><Button><Link to="/about">Login</Link></Button></li>
                                                <li><Button><Link to="/about">Register</Link></Button></li>
                                                <li><Button><Link to="/about">Forgot password</Link></Button></li>
                                                <li><Button><Link to="/about">Reset password</Link></Button></li>
                                                <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                                <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                                <li><Button><Link to="/about">Terms of Service</Link></Button></li>
                                                <li><Button><Link to="/about">404 Page</Link></Button></li>
                                            </ul>
                                        </div>

                                    </li> */}
                    <li className="list-inline-item">
                      <Button>
                        <Link>Contact</Link>
                      </Button>
                    </li>
                  </ul>

                  {windowWidth < 992 && (
                    <>
                      {context.isLogin !== "true" && (
                        <div className="pl-3 pr-3">
                          <br />
                          <Link to={"/signIn"}>
                            <Button
                              className="btn btn-g btn-lg w-100"
                              onClick={closeNav}
                            >
                              Sign In
                            </Button>
                          </Link>
                        </div>
                      )}
                    </>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Nav;