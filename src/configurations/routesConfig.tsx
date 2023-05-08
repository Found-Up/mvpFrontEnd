import { HomePage } from "../stories/NCU Pages/Home Page/HomePage";
import { MessagePortal } from "../stories/NCU Pages/Message Portal/MessagePortal";
import { NCUSignInPage } from "../stories/NCU Pages/NCU Sign In Page/NCUSignInPage";
import { ProfilePage } from "../stories/NCU Pages/Profile Page/ProfilePage";
import { NcuProfilePageLoader } from "../stories/NCU Pages/Profile Page/ncuProfilePageLoader";
import { WelcomePage } from "../stories/NCU Pages/Welcome Page/WelcomePage";
import { SRUMessagePortal } from "../stories/SRU Pages/Message Portal/SRUMessagePortal";
import { SRUCompanyPage } from "../stories/SRU Pages/SRU Company Page/SRUCompanyPage";
import { BaseHeader } from "../stories/organisms/Headers/BaseHeader";
import { NCUHeader } from "../stories/organisms/Headers/NCUHeader";
import { SRUHeader } from "../stories/organisms/Headers/SRUHeader";

export const routesConfig = [
  {
    element: <BaseHeader links={['Home', 'Features', 'Process', 'Discover', 'Feedback']}/>,
    children: [
      {
        path: "/",
        element: <WelcomePage />,
      },
      {
        path: "/login",
        element: <NCUSignInPage />
      },
    ],
  },
  {
    path: "/NCU",
    element: <NCUHeader links={['Home','Messages','Profile','Notifications']} />,
    children: [
      {
        path: "Home",
        element: <HomePage user={""} />,
      },
      {
        path: "Profile",
        element: <ProfilePage user={""} />,
        loader: NcuProfilePageLoader,
      },
      {
        path: "Messages",
        element: <MessagePortal user={""} messages={[]} />,
      },
    ],
  },
  {
    path: "/SRU",
    element: <SRUHeader links={['Home', 'Messages', 'Profile', 'Notifications']} />,
    children: [
      {
        path: "Home",
        element: <HomePage user={""} />,
      },
      {
        path: "CompanyProfile",
        element: <SRUCompanyPage />,
      },
      {
        path: "Messages",
        element: <SRUMessagePortal user={""} messages={[]} />,
      },
    ],
  }
]