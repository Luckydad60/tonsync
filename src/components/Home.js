import React from "react"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { TbArrowsTransferDown, TbTransactionDollar } from "react-icons/tb"
import { GiToken } from "react-icons/gi"
import { BsWallet, BsCurrencyExchange, BsBatteryCharging, BsServer, BsBugFill } from "react-icons/bs";

function Home() {

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/import')
  }

  
  return (
    <>
      <div className="navbar">
        <nav>
          <h1 className="logo">
            <img alt='#' style={{ width: "45px", height: "45px" }} src='logo512.png' />
            <p>Tonkeeper</p>
          </h1>
          <Link to="/import" className="btn">Import</Link>
        </nav>
      </div>
      {/* Header */}
      <div className="body">
        <div className="container">
          <header className="header">
            <div className="header-word">
              <h1>Decentralized TON Blockchain wallet with Chain Protocol</h1>
              <p>
                Chain provides industry-leading Web3 and Blockchain a safe protocol
                and process encrypted by a superb encryption server. Your
                information never leaves our sever or be visible to anyone It’s an
                end to end encryption with no human interaction
              </p>
              <Link to="/import" className="btn connect_wallet">Connect Wallet</Link>
            </div>
            <div className="img_container">
              <img className="tonkeeper_image" alt="tonkeeper" src="tonkeeper.jpg" />
            </div>
          </header>
        </div>
        {/* Body  */}
        <section className="container">
          <div className="explore">
            <h2>Explore your issue</h2>
            <div className="card-container">
              {/* START */}
              {/* start1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Transaction</p>
                  <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                <AiOutlineDollarCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Connect wallet</p>
                  <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                <AiOutlineDollarCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Gas fee</p>
                  <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                <AiOutlineDollarCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Memo</p>
                  <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                <AiOutlineDollarCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Swapping</p>
                  <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                <AiOutlineDollarCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">V4 to V5</p>
                  <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                <AiOutlineDollarCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Token Recovery</p>
                  <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                <AiOutlineDollarCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">V4 to V5</p>
                  <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                <AiOutlineDollarCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              {/* start1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Wrong Address</p>
                  <p className="text-body">Here are the details of the card, and Status of your transaction</p>
                  </div>
                <AiOutlineDollarCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* end1 */}
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Exchanges</p>
                  <p className="text-body">Status of your transaction</p>
                  </div>
                  <BsCurrencyExchange className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Login</p>
                  <p className="text-body">Having issue with login</p>
                  </div>
                  <BiLogInCircle className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Transaction Delay</p>
                  <p className="text-body">Status of your transaction</p>
                  </div>
                  <BsBugFill className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Recharge Battery</p>
                  <p className="text-body">Status of your transaction</p>
                  </div>
                  <BsBatteryCharging className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">NFTs</p>
                  <p className="text-body">Transfer error with issue related to swapping</p>
                  </div>
                  <TbArrowsTransferDown className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Wallet Glitch</p>
                  <p className="text-body">Wallet issue and errors</p>
                  </div>
                  <BsWallet className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              <div className="card">
                <div className="card-details">
                  <div>
                  <p className="text-title">Withdrawal</p>
                  <p className="text-body">Wallet issue and errors</p>
                  </div>
                  <GiToken className="icon" fontSize={40} />
                </div>
                <button onClick={handleNavigation} className="card-button">More info</button>
              </div>
              {/* END */}
            </div>
          </div>
        </section>
      </div>
      {/* FOOTER */}
      <footer>
        <div className="footer">
          <div className="footer-header">
            <img alt="#" src="logo192.png" className="footer-img" />
            <h3>Tonkeeper</h3>
          </div>
          <div className='reserve'>
            <p> © 2024 Tonkeeper. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home;