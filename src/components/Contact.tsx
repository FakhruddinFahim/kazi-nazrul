import "./Contact.scss"
import nazrulIslam from "../assets/nazrul-islam.png"
import nazrulIslam2 from "../assets/nazrul-islam-2.png"
import shop from "../assets/shop.png"
import form from "../assets/form.png"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaTiktok,
  FaTwitter
} from "react-icons/fa";
import {FormEventHandler, useState} from "react";
import {FiPhoneCall} from "react-icons/fi";
import {SlGlobe} from "react-icons/sl";
import {MdAlternateEmail} from "react-icons/md";

type InputProps = {
  label?: string,
  onInput?: FormEventHandler<HTMLInputElement>
}

function Input(props: InputProps) {
  return <div className={"input-group"}>
    <label>{props.label}</label>
    <input type={"text"} onInput={(e) => {
      if (e.currentTarget.value.length == 0) {
        e.currentTarget.classList.remove("focus");
      } else {
        e.currentTarget.classList.add("focus");
      }
      if (props.onInput) {
        props.onInput(e);
      }
    }}/>
  </div>;
}

export function Contact() {

  const [name, setName] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  const [err, setErr] = useState<string | undefined>(undefined);
  const [successMsg, setSuccessMsg] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const onInput = () => {
    setErr(undefined);
    setSuccessMsg(undefined);
  }
  return <div id={"Contact"}>
    <div className={"home"}>
      <div className={"header"}>
        <div className={"name-container"}>
          <p className={"name"}>
            <span className={"first-latter"}>N</span>
            Kazi Nazrul Islam
          </p>
        </div>
        <ul className={"menu"}>
          <li><a href={"/"}>Home</a></li>
          <li><a href={"/"}>About</a></li>
          <li><a href={"/"}>Contact</a></li>
        </ul>
      </div>
      <div className={"info"}>
        <div className={"title"}>
          <p className={"web"}>nrijewllery.com</p>
          <div>
            <p className={"name"}><span>I'm</span> Nri Nazrul Islam</p>
            <span className={"role"}>Managing Director Nri Group Of Company</span>
          </div>
        </div>
        <div className={"photo"}>
          <div className={"rectangle"}>
          </div>
          <div className={"ellipse"}></div>
          <img src={nazrulIslam} alt={"Nazrul Islam"}/>
        </div>
      </div>
    </div>
    <div className={"social"}>
      <ul className={"social-list"}>
        <li>
          <a className={"link"} href={"/"} target={"_blank"}>
            <i className={"icon"}><FaTiktok/></i>
          </a>
        </li>
        <li>
          <a className={"link"} href={"/"} target={"_blank"}>
            <i className={"icon"}><FaFacebookF/></i>
          </a>
        </li>
        <li>
          <a className={"link"} href={"/"} target={"_blank"}>
            <i className={"icon"}><FaInstagram/></i>
          </a>
        </li>
      </ul>
    </div>
    <div className={"about"}>
      <div className={"content"}>
        <div className={"about-text"}>
          <h2>Entrepreneur & Investor</h2>
          <p>Entrepreneur & Investor: A Leading Bangladeshi Success Story in the UAE's Jewelry Industry
            Pioneering Jewelry Success Across the UAE</p>
        </div>
        <div className={"photo"}>
          <div className={"ellipse"}></div>
          <img src={nazrulIslam2} alt={"Nazrul Islam"}/>
        </div>
      </div>
      <div className={"separator"}></div>
    </div>
    <div className={"location"}>
      <div className={"location-text"}>
        <h2>Visit Our Store</h2>
        <p>
          Visit Our Store and Discover an Extensive Collection of 22K, 18K, and 24K Jewelry:
          Featuring Stunning Designs from Singapore, Qatar, Turkey, and Italy. Whether you're
          looking for timeless elegance or custom-made creations, we offer a variety of options
          tailored to your style and preference!
        </p>
        <div className={"count"}>
          <div className={"store"}>
            <p>6 Store</p>
            <p>Dubai & Sharja</p>
          </div>
          <div className={"employee"}>
            <p>35+</p>
            <p>Employee</p>
          </div>
        </div>
      </div>

      <h2 className={"location-title"}>Locate Our Store</h2>
      <div className={"separator"}></div>

      <div className={"location-list"}>

        <div className={"location-card"}>
          <img src={shop} alt={"shop"}/>
          <div className={"info"}>
            <h2 className={"name"}>NRI Jewellery Office</h2>
            <p className={"address"}>Sherina Plaza-3, Room No- 311, Deira Enrichment Project, Deira, Dubai.</p>
          </div>
          <div className={"buttons"}>
            <a className={"locate-map-btn button"}>Locate in Maps</a>
            <a className={"contact-btn button"}>Contact</a>
          </div>
        </div>

        <div className={"location-card"}>
          <img src={shop} alt={"shop"}/>
          <div className={"info"}>
            <h2 className={"name"}>NRI JEWELLERY BULLION</h2>
            <p className={"address"}>gold land building shop no -g54, gold souq deira-dubai</p>
          </div>
          <div className={"buttons"}>
            <a className={"locate-map-btn button"}>Locate in Maps</a>
            <a className={"contact-btn button"}>Contact</a>
          </div>
        </div>


        <div className={"location-card"}>
          <img src={shop} alt={"shop"}/>
          <div className={"info"}>
            <h2 className={"name"}>NRI JEWELLERY Showroom (br-3 )</h2>
            <p className={"address"}>Sherina Plaza-3, Room No- 311, Deira Enrichment Project, Deira, Dubai.</p>
          </div>
          <div className={"buttons"}>
            <a className={"locate-map-btn button"}>Locate in Maps</a>
            <a className={"contact-btn button"}>Contact</a>
          </div>
        </div>

        <div className={"location-card"}>
          <img src={shop} alt={"shop"}/>
          <div className={"info"}>
            <h2 className={"name"}>NRI JEWELLERY sharja (br-4)</h2>
            <p className={"address"}>Sherina Plaza-3, Room No- 311, Deira Enrichment Project, Deira, Dubai.</p>
          </div>
          <div className={"buttons"}>
            <a className={"locate-map-btn button"}>Locate in Maps</a>
            <a className={"contact-btn button"}>Contact</a>
          </div>
        </div>

        <div className={"location-card"}>
          <img src={shop} alt={"shop"}/>
          <div className={"info"}>
            <h2 className={"name"}>NRI JEWELLERY diamond (br-5)</h2>
            <p className={"address"}>Sherina Plaza-3, Room No- 311, Deira Enrichment Project, Deira, Dubai.</p>
          </div>
          <div className={"buttons"}>
            <a className={"locate-map-btn button"}>Locate in Maps</a>
            <a className={"contact-btn button"}>Contact</a>
          </div>
        </div>

        <div className={"location-card"}>
          <img src={shop} alt={"shop"}/>
          <div className={"info"}>
            <h2 className={"name"}>NRI JEWELLERY showroom (br-6)</h2>
            <p className={"address"}>Sherina Plaza-3, Room No- 311, Deira Enrichment Project, Deira, Dubai.</p>
          </div>
          <div className={"buttons"}>
            <a className={"locate-map-btn button"}>Locate in Maps</a>
            <a className={"contact-btn button"}>Contact</a>
          </div>
        </div>
      </div>

    </div>

    <div className={"contact-form"}>
      <div className={"content"}>
        <h2>Get In Touch</h2>
        <div className={"separator"}></div>
        <div className={"middle-container"}>
          <div className={"left-side"}>
            <form className={"form"}>

              {(successMsg || err) &&
                <div className={"msg " + (err ? "error" : "success")}><p>{err ? err : successMsg}</p></div>
              }
              <Input
                label={"Contact Name"}
                onInput={(e) => {
                  setName(e.currentTarget.value);
                  onInput();
                }}
              />
              <Input
                label={"Street"}
                onInput={(e) => {
                  setStreet(e.currentTarget.value)
                  onInput();
                }}
              />
              <Input
                label={"City"}
                onInput={(e) => {
                  setCity(e.currentTarget.value);
                  onInput();
                }}
              />
              <Input
                label={"Contact Phone"}
                onInput={(e) => {
                  setPhone(e.currentTarget.value)
                  onInput();
                }}
              />
              <Input
                label={"E-mail"}
                onInput={(e) => {
                  setEmail(e.currentTarget.value);
                  onInput();
                }}
              />
              <Input
                label={"Let's talk about your idea"}
                onInput={(e) => {
                  setMsg(e.currentTarget.value);
                  onInput();
                }}
              />
              <button
                id={"btn-submit"}
                className={loading ? "loading" : ""}
                type={"submit"}
                onClick={(e) => {
                  e.preventDefault();
                  if (e.currentTarget.classList.contains("loading")) {
                    return;
                  }
                  const form = new FormData();
                  form.append("type", "contact");
                  if (name != "") {
                    form.append("name", name);
                  }
                  if (street != "") {
                    form.append("street", street);
                  }
                  if (city != "") {
                    form.append("city", city);
                  }
                  if (phone != "") {
                    form.append("phone", phone);
                  }
                  if (email != "") {
                    form.append("email", email);
                  }
                  if (msg != "") {
                    form.append("msg", msg);
                  }

                  const emptyFields = [];
                  for (const [key, value] of form) {
                    if (!value) {
                      emptyFields.push(key);
                    }
                  }
                  if (emptyFields.length > 0) {
                    setErr(emptyFields.join(", ") + " field required");
                    return;
                  }
                  setLoading(true);
                  fetch("./api.php", {
                    method: "POST",
                    body: form,
                  }).then(async (res) => {
                    setLoading(false);
                    const json = await res.json();
                    console.log(json);
                    if (json.status == "ok") {
                      setSuccessMsg(json.msg);
                    } else {
                      setErr(json.msg);
                    }
                  }).catch((reason) => {
                    setErr(reason.message);
                    setLoading(false);
                  });
                }}>
                {loading ? <span className={"loader"}></span> :
                  <span className={"text"}>Submit</span>
                }
              </button>
            </form>
            <div className={"links"}>
              <a className={"link-card"} href={"tel:111111111"}>
                <i className={"icon"}><FiPhoneCall/></i>
                <div className={"info"}>
                  <p className={"title"}>Phone</p>
                  <p className={"subtitle"}>111 111 111</p>
                </div>
              </a>

              <a className={"link-card"} href={"mailto:nrijewllery2008@gmail.com"}>
                <i className={"icon"}><MdAlternateEmail/></i>
                <div className={"info"}>
                  <p className={"title"}>E-mail</p>
                  <p className={"subtitle"}>nrijewllery2008@gmail.com</p>
                </div>
              </a>

              <a className={"link-card"} href={"https://nrijewllery.com"}>
                <i className={"icon"}><SlGlobe/></i>
                <div className={"info"}>
                  <p className={"title"}>Helpdesk</p>
                  <p className={"subtitle"}>https://nrijewllery.com</p>
                </div>
              </a>

            </div>
          </div>
          <div className={"right-side"}>
            <img src={form} alt={"Form"}/>
          </div>
        </div>
        <div className={"email-us"}>
          <h2>Let's Start by Saying Hi!</h2>
          <a href={"mailto:nrijewllery2008@gmail.com"}><i><FaMailBulk/></i> Email me</a>
        </div>
      </div>
    </div>
    <div className={"footer"}>
      <ul>
        <li><a href={"/"}><i className={"icon"}><FaTwitter/></i></a></li>
        <li><a href={"/"}><i className={"icon"}><FaLinkedinIn/></i></a></li>
      </ul>
      <p>Kazi Nazrul Islam | All Reserved</p>
    </div>
  </div>
}