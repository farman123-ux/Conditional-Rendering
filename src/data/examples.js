export const examplesData = [
  {
    id: "login-logout",
    title: "Login and Logout Status",
    shortTitle: "Login & Logout",
    difficulty: "Beginner",
    description:
      "Demonstrate how a UI dynamically switches between a logged-in dashboard greeting and a guest login prompt based on user authentication state.",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    iconName: "UserCheck",
    method: "Ternary Operator (? :)",
    summary:
      "Learn how to render a welcome greeting when logged in and a login prompt when logged out using the ternary operator.",
    whatYouWillLearn: [
      "How to store an authentication flag (boolean) in React state using useState.",
      "How to use the ternary operator inside JSX to render one of two components.",
      "How button clicks toggle the state between true and false.",
      "Why the ternary operator is preferred when you have an 'either-or' UI decision."
    ],
    code: `import { useState } from "react";

function AuthStatus() {
  // 1. Declare state variable 'isLoggedIn' with initial value 'false'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="auth-container">
      {/* 2. Ternary operator checks condition: condition ? <IfTrue /> : <IfFalse /> */}
      {isLoggedIn ? (
        <div className="card logged-in">
          <h2>Welcome back, Alex! 👋</h2>
          <p>You have access to your personal developer dashboard.</p>
          <button onClick={() => setIsLoggedIn(false)}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="card logged-out">
          <h2>Please Log In 🔒</h2>
          <p>Sign in to view your private projects and lessons.</p>
          <button onClick={() => setIsLoggedIn(true)}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthStatus;`,
    explanation: [
      {
        line: "const [isLoggedIn, setIsLoggedIn] = useState(false);",
        description:
          "Creates a state variable named isLoggedIn initialized to false. React tracks this value and re-renders the component whenever setIsLoggedIn is called."
      },
      {
        line: "{isLoggedIn ? ( ... ) : ( ... )}",
        description:
          "The ternary operator acts as an inline if-else statement. If isLoggedIn is true, it renders the first block (Welcome back card). If false, it renders the second block (Please Log In card)."
      },
      {
        line: "onClick={() => setIsLoggedIn(false)}",
        description:
          "When the user clicks 'Log Out', this function sets isLoggedIn to false, causing React to immediately re-render with the login screen."
      },
      {
        line: "onClick={() => setIsLoggedIn(true)}",
        description:
          "When the user clicks 'Log In', this function updates isLoggedIn to true, causing React to immediately re-render with the welcome dashboard."
      }
    ],
    conditionExplanation:
      "The condition is 'isLoggedIn === true'. When true, Alex's dashboard greeting is displayed with a logout button. When false, the guest login prompt is displayed with a login button.",
    expectedOutput: {
      whenTrue: "Displays: 'Welcome back, Alex! 👋' with a dashboard message and a 'Log Out' button.",
      whenFalse: "Displays: 'Please Log In 🔒' with an informational notice and a 'Log In' button."
    }
  },
  {
    id: "show-hide-password",
    title: "Show and Hide Password",
    shortTitle: "Password Visibility",
    difficulty: "Beginner",
    description:
      "Demonstrate how a password input dynamically toggles its type attribute and visibility icon between hidden dots and readable plain text.",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    iconName: "Eye",
    method: "Conditional Attributes & State",
    summary:
      "Use useState to toggle an input's type between 'password' and 'text', and conditionally switch between eye icons.",
    whatYouWillLearn: [
      "How to toggle a boolean state variable using the negation operator (!showPassword).",
      "How to conditionally set HTML/JSX attributes like type={showPassword ? 'text' : 'password'}.",
      "How to conditionally render different Lucide icons (Eye vs EyeOff).",
      "How to enhance user experience and accessibility for password fields."
    ],
    code: `import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function PasswordInput() {
  // 1. Store input value and visibility toggle state
  const [password, setPassword] = useState("ReactRules2026!");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-wrapper">
      <label htmlFor="pwd">Enter Password:</label>
      <div className="input-row">
        {/* 2. Conditional attribute: change input type based on state */}
        <input
          id="pwd"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        {/* 3. Button toggles boolean state on click */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {/* 4. Conditional rendering of Lucide icons */}
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          <span>{showPassword ? "Hide" : "Show"}</span>
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;`,
    explanation: [
      {
        line: "const [showPassword, setShowPassword] = useState(false);",
        description:
          "Initializes showPassword to false, meaning by default passwords should be concealed with dots for security."
      },
      {
        line: 'type={showPassword ? "text" : "password"}',
        description:
          "Uses conditional evaluation directly inside an attribute. If showPassword is true, the input renders as regular text; otherwise, it renders as a masked password."
      },
      {
        line: "onClick={() => setShowPassword(!showPassword)}",
        description:
          "The exclamation mark (!) is the logical NOT operator. It flips true to false and false to true whenever the button is pressed."
      },
      {
        line: "{showPassword ? <EyeOff /> : <Eye />}",
        description:
          "Renders an EyeOff icon when characters are visible to signal the action to hide them, and an Eye icon when obscured."
      }
    ],
    conditionExplanation:
      "The condition is 'showPassword === true'. When true, the input's type attribute becomes 'text' and the icon switches to EyeOff. When false, the input type is 'password' (dots) and the icon is Eye.",
    expectedOutput: {
      whenTrue: "Input shows plain text characters (e.g. 'ReactRules2026!') with an 'EyeOff' icon and 'Hide' label.",
      whenFalse: "Input shows masked dots (••••••••••••••) with an 'Eye' icon and 'Show' label."
    }
  },
  {
    id: "loading-data",
    title: "Loading State and Data Display",
    shortTitle: "Loading & Data",
    difficulty: "Intermediate",
    description:
      "Demonstrate an asynchronous loading simulation where a component switches between an idle state, an animated loading spinner, and the loaded data card.",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    iconName: "Loader2",
    method: "Multiple Conditions (if/else & ternary)",
    summary:
      "Learn how modern web applications manage loading spinners and display data once network requests resolve.",
    whatYouWillLearn: [
      "How to represent multi-state flows (idle, loading, success) in React.",
      "How to use setTimeout to simulate real-world API requests.",
      "How to render loading spinners while fetching and data cards when ready.",
      "How to provide feedback to users so they know background actions are occurring."
    ],
    code: `import { useState } from "react";

function DataViewer() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchUserData = () => {
    setIsLoading(true);
    setData(null);

    // Simulate a 1.5 second API call
    setTimeout(() => {
      setData({
        name: "Sarah Chen",
        role: "Frontend Engineer",
        skills: ["React", "JavaScript", "Tailwind CSS"],
        joinedYear: 2024
      });
      setIsLoading(false);
    }, 1500);
  };

  // 1. If currently loading, display the spinner
  if (isLoading) {
    return (
      <div className="status-box loading">
        <div className="spinner"></div>
        <p>Fetching user profile from server...</p>
      </div>
    );
  }

  // 2. If data is available, display the loaded user card
  if (data) {
    return (
      <div className="status-box profile-card">
        <h3>{data.name}</h3>
        <p className="role">{data.role} • Joined {data.joinedYear}</p>
        <div className="tags">
          {data.skills.map((skill) => (
            <span key={skill} className="badge">{skill}</span>
          ))}
        </div>
        <button onClick={() => setData(null)}>Reset</button>
      </div>
    );
  }

  // 3. Default fallback state: prompt user to fetch data
  return (
    <div className="status-box empty">
      <p>No user data loaded yet.</p>
      <button onClick={fetchUserData}>Fetch User Profile</button>
    </div>
  );
}

export default DataViewer;`,
    explanation: [
      {
        line: "const [isLoading, setIsLoading] = useState(false);",
        description:
          "Tracks whether an asynchronous request is in flight. Starts as false."
      },
      {
        line: "if (isLoading) { return <Spinner />; }",
        description:
          "An early return pattern! If isLoading is true, React immediately renders the loading state and stops evaluating the rest of the component."
      },
      {
        line: "if (data) { return <UserProfileCard />; }",
        description:
          "Another early return. If data exists (is truthy and not null), React renders the populated profile information."
      },
      {
        line: "return <DefaultEmptyPrompt />;",
        description:
          "The fallback UI when neither condition is met (not loading and data is still null). Invites the user to click the fetch button."
      }
    ],
    conditionExplanation:
      "Uses sequential if statements (early returns): First checks 'isLoading'. If true, returns the spinner. Next checks 'data !== null'. If true, returns the profile card. Otherwise, returns the initial prompt.",
    expectedOutput: {
      whenTrue: "While fetching: Animated spinner with text 'Fetching user profile from server...'",
      whenFalse: "When finished: Complete profile card for Sarah Chen with skills badges and reset button."
    }
  }
];
