import { Fragment, useState, useContext } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { SidebarContext } from '../context/SidebarContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const subMenu = [
  {
    name: 'Focus',
    href: '/content-management/focus',
    icon: '',
    access: true,
    show: true
  },
  {
    name: 'Focus',
    href: '/content-management/focus/add-edit',
    icon: '',
    access: true,
    show: false
  },
  {
    name: 'Focus',
    href: '/content-management/focus/view',
    icon: '',
    access: true,
    show: false
  },
  {
    name: 'Affirmation',
    href: '/content-management/affirmation',
    icon: '',
    access: true,
    show: true
  },
  {
    name: 'Affirmation',
    href: '/content-management/affirmation/add-edit',
    icon: '',
    access: true,
    show: false
  },
  {
    name: 'Affirmation',
    href: '/content-management/affirmation/view',
    icon: '',
    access: true,
    show: false
  },
  {
    name: 'Meditation',
    href: '/content-management/meditation',
    icon: '',
    access: true,
    show: true
  },
  {
    name: 'Meditation',
    href: '/content-management/meditation/add-edit',
    icon: '',
    access: true,
    show: false
  },
  {
    name: 'Gratitude',
    href: '/content-management/gratitude',
    icon: '',
    access: true,
    show: true
  },
  {
    name: 'Gratitude',
    href: '/content-management/gratitude/add-edit',
    icon: '',
    access: true,
    show: false
  },
  {
    name: 'Rituals',
    href: '/content-management/rituals',
    icon: '',
    access: true,
    show: true
  },
  {
    name: 'Rituals',
    href: '/content-management/rituals/add-edit',
    icon: '',
    access: true,
    show: false
  },
  // {
  //   name: 'BedTime Stories',
  //   href: '/content-management/bedtime-stories',
  //   icon: '',
  //   access: true,
  //   show: true,
  // },
  {
    name: 'Sounds',
    href: '/content-management/sounds',
    icon: '',
    access: true,
    show: true
  },
  {
    name: 'Sounds',
    href: '/content-management/sounds/add-edit',
    icon: '',
    access: true,
    show: false
  },
  {
    name: 'Top Picks',
    href: '/content-management/top-picks',
    icon: '',
    access: true,
    show: true
  },
  {
    name: 'Top Picks',
    href: '/content-management/top-picks/add-edit',
    icon: '',
    access: true,
    show: false
  }
  // {
  //   name: 'Manifestation',
  //   href: '/content-management/manifestation',
  //   icon: '',
  //   access: true,
  //   show: true,
  // },
];

const Menu = ({ item, setActiveIndex, index }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setShow } = useContext(SidebarContext);

  const getStatus = () => {
    return !!subMenu?.map((item) => item.href)?.includes(location.pathname);
  };

  const [showSubMenu, isShowSubMenu] = useState(getStatus());

  const handleRedirect = (link) => {
    if (window.innerWidth < 1024) {
      setShow(false);
    }
    if(!item.remove){
      navigate(link);
    }else{
      navigate(`/home`);
    }
   
  };

  return (
    <>
      <div
        key={item.name}
        onClick={() => {
          item.href === 'isDropDown' ? isShowSubMenu(!showSubMenu) : handleRedirect(item.href);

          if (item.href !== 'isDropDown') {
            setActiveIndex(index);
          }
        }}
        className={classNames(
          location?.pathname?.includes(item.href)
            ? 'font-semibold cursor-pointer '
            : 'cursor-pointer',
          'group outline-none mx-2 flex  items-center py-3 px-2 text-sm font-normal rounded-md'
        )}
      >
       
      
          <img
            src={item?.icon}
            alt="sidebar_icon"
            className={`mr-3 ml-2 h-6 w-6   `}
          />
    

        {/* <item.icon className={`mr-3 ml-2 h-6 w-6 flex-shrink-0 text-white`} aria-hidden='true' /> */}
        {item.name}
        {item.isDropDown &&
          (showSubMenu ? (
            <ChevronUpIcon className="w-[20px] ml-2" />
          ) : (
            <ChevronDownIcon className="w-[20px] ml-2" />
          ))}
      </div>
      {item.isDropDown && showSubMenu && (
        <Transition
          show={showSubMenu}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="py-2 space-y-2 px-2 ">
            {item.subMenu?.map((innerItem, index) => {
              return !innerItem.show ? (
                ''
              ) : (
                <div
                  key={index}
                  onClick={() => handleRedirect(innerItem.href)}
                  className={classNames(
                    location?.pathname?.includes(innerItem.href)
                      ? 'bg-gradient-to-r  cursor-pointer'
                      : 'cursor-pointer',
                    'pl-[20px] mx-4  group outline-none flex  items-center py-3 px-2 text-sm font-normal rounded-md'
                  )}
                >
                  {innerItem.name}
                </div>
              );
            })}
          </div>
        </Transition>
      )}
    </>
  );
};

Menu.propTypes = {
  item: PropTypes.any
};

export default Menu;
