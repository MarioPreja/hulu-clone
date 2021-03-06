function HeaderItem({Icon, title}) {
  
    return (
      <div className="left-side-header  flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widest uppercase">
          {title}
        </p>
      </div>
    );
}

export default HeaderItem
