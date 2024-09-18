import logo from "../../assets/icons/logo.svg"

export const Logo = () => {
  return (
    <div className="px-4 py-3 bg-blue/5 rounded-lg flex items-center gap-3">
      <img src={logo} alt="logo tokena"/>
      <div className="flex flex-col">
        <span className="text-blue-2 text-xs font-bold">Tokena</span>
        <span className="text-blue text-xxs font-medium">Finance app</span>
      </div>
    </div>
  )
}
