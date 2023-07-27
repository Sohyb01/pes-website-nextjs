import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const request = await fetch("http://localhost:3000/api", {
    method: "GET",
    cache: "no-cache",
  });
  const data = await request.json();
  const usersData = data.allUsers;
  console.log(usersData);

  return (
    <>
      <h1>Form test</h1>
    </>
  );
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [age, setAge] = useState("");

  //   const submitHandler = (e: FormEvent) => {
  //     e.preventDefault();
  //     console.log("testing");
  //     const request = fetch("@/app/api", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         firstName: firstName,
  //         lastName: lastName,
  //         age: age,
  //       }),
  //     });
  //     const data = await request.json();
  //     console.log("New User: " + JSON.stringify(data.newUser));
  //   };

  //   return (
  //     <form onSubmit={submitHandler}>
  //       <input
  //         className="border-solid border-pes_orange border-2"
  //         onChange={(e) => setFirstName(e.target.value)}
  //         type="text"
  //         name="firstName"
  //         id="firstName"
  //         value={firstName}
  //         placeholder="First Name"
  //       />
  //       <input
  //         className="border-solid border-pes_orange border-2"
  //         onChange={(e) => setLastName(e.target.value)}
  //         type="text"
  //         name="lastName"
  //         id="lastName"
  //         value={lastName}
  //         placeholder="Last Name"
  //       />
  //       <input
  //         className="border-solid border-pes_orange border-2"
  //         onChange={(e) => setAge(e.target.value)}
  //         type="number"
  //         name="age"
  //         id="age"
  //         value={age}
  //         placeholder="Age"
  //       />
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
}
