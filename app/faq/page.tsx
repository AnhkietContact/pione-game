"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, TextField } from "@mui/material";
import Image from "next/image";

const Faq: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    console.log({ fullName, email, content });
  };
  return (
    <>
      <div className="p-8 bg-black  shadow-lg mt-20">
        <div className="flex justify-center items-center">
          <Image
            src={"/image/svg/FAQ.svg"}
            alt=""
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="container">
          <Typography
            variant="h4"
            className="text-center font-orbitron font-bold text-[48px]"
            gutterBottom
          >
            FAQ
          </Typography>

          {/* Accordion 1 */}
          <Accordion className="shadow-lg">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="" />}>
              <Typography className="font-orbitron font-bold">
                1. What exactly is Pione-Game, and what does it do?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="">
                Imagine you’re part of a huge, decentralized network where
                devices across the globe need to stay connected and share
                information efficiently. Pione-Game is the app that makes this
                possible. Designed for Android and iOS (with a PC version in the
                works), it collects data from devices like node IDs, device IPs,
                and more, and sends this data through an integrated path. By
                working hand-in-hand with the DePINscan platform, Pione-Game
                helps ensure that every node remains synchronized and
                operational, updating information once per hour to keep the
                network running smoothly.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 2 */}
          <Accordion className="shadow-lg">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="" />}>
              <Typography className="font-orbitron font-bold">
                2. How does Pione-Game contribute to decentralized
                infrastructure?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="">
                Pione-Game plays the role of a real-time data messenger. Imagine
                a vast infrastructure of interconnected devices. Each of these
                devices, or &quot;nodes,&quot; needs to report its status to
                maintain transparency and function properly. Pione-Game helps by
                pinging data from these devices—like their IP, device name, and
                node ID—ensuring that everyone in the decentralized network can
                see what&apos;s going on at any given moment. It’s like having a
                constant health check for your network.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 3 */}
          <Accordion className="shadow-lg">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="" />}>
              <Typography className="font-orbitron font-bold">
                3. What kind of data does Pione-Game collect, and why is it
                important?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="">
                Pione-Game collects critical data points such as the device
                name, code, IP address, node ID, and the user’s email connected
                to the node account. This might sound technical, but imagine it
                as gathering essential identifiers that help keep each node on
                the network in check. Without these details, devices could fall
                out of sync, leading to inefficiencies. By ensuring this data is
                up-to-date and shared in real-time, Pione-Game supports the
                stability and transparency of the entire infrastructure.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 4 */}
          <Accordion className="shadow-lg">
            <AccordionSummary expandIcon={<ExpandMoreIcon className="" />}>
              <Typography className="font-orbitron font-bold">
                4. Is Pione-Game easy to use for non-technical users?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="">
                Absolutely! While Pione-Game is built with advanced data
                capabilities, its user-friendly design ensures that even those
                without deep technical knowledge can navigate the app easily.
                Think of it as a simple dashboard that works behind the scenes,
                constantly sending and receiving updates while allowing you to
                monitor your devices effortlessly. This intuitive interface
                makes managing decentralized networks accessible for everyone.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="flex flex-col items-center min-h-screen">
          <div className="p-8 shadow-lg w-full max-w-4xl">
            <div className="mt-8">
              <Typography
                variant="h5"
                gutterBottom
                className="text-center font-orbitron font-bold text-[48px]"
              >
                Send us a message
              </Typography>
              <form className="flex flex-col space-y-4">
                <TextField
                  placeholder="Full Name"
                  variant="outlined"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-white rounded-lg"
                  InputLabelProps={{ className: "" }}
                  InputProps={{ className: "" }}
                />
                <TextField
                  placeholder="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white rounded-lg"
                  InputLabelProps={{ className: "" }}
                  InputProps={{ className: "" }}
                />
                <TextField
                  placeholder="Content"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="bg-white rounded-lg"
                  InputLabelProps={{ className: "" }}
                  InputProps={{ className: "" }}
                />
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  className="bg-gradient-bg  font-orbitron font-bold text-[20px]"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
