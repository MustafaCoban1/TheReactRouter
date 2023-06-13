import { useLocation } from "react-router" 

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  //?name=mario

  return (
    <div>
        <h2>Hey {name}, Contact us here...</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor sem, eleifend ut sollicitudin ut, luctus nec lacus. Donec erat erat, porttitor et quam a, blandit placerat ligula. Proin porta euismod eleifend. Curabitur vitae bibendum urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur lobortis vel tortor sed mollis. Quisque commodo, enim vitae mollis viverra, nisl sapien condimentum odio, ut pharetra velit odio in mi. Nunc dictum, orci porta elementum malesuada, sapien velit posuere mi, sit amet accumsan magna nisi id ipsum.</p>
    </div>
  )
}
