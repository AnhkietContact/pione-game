import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ThemeProvider } from "@mui/material";
import { innerTheme } from "@/theme/theme";

export default function AccordionUsage() {
  return (
    <ThemeProvider theme={innerTheme}>
      <div data-aos="fade-up" className="space-y-4">
        {/* Accordion 1 */}
        <Accordion className="bg-white-opacity-10 transition-all duration-300">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FF5C00" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="flex items-center text-white">
              <div className="w-10 h-10 rounded-full bg-gradient-bg  flex items-center justify-center mr-2">
                1
              </div>
              <span className="font-inter text-[20px]">Access</span>
            </div>
          </AccordionSummary>
          <AccordionDetails className="rounded-b-2xl font-inter text-[16px] text-white">
            Go to the official PIONE GAME website, or open Google Play (Android)
            or the App Store (iOS) to search for the &quot;PIONE GAME&quot; app.
          </AccordionDetails>
        </Accordion>

        {/* Accordion 2 */}
        <Accordion className="bg-white-opacity-10 transition-all duration-300">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FF5C00" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <div className="flex items-center text-white">
              <div className="w-10 h-10 rounded-full bg-gradient-bg flex items-center justify-center mr-2">
                2
              </div>
              <span className="font-inter text-[20px]">Install the app</span>
            </div>
          </AccordionSummary>
          <AccordionDetails className="rounded-b-2xl font-inter text-[16px] text-white">
            Select “Download” or “Install” to begin downloading the app. Wait a
            few minutes for the installation process to complete on your device.
          </AccordionDetails>
        </Accordion>

        {/* Accordion 3 */}
        <Accordion className="bg-white-opacity-10 transition-all duration-300">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#FF5C00" }} />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <div className="flex items-center text-white">
              <div className="w-10 h-10 rounded-full bg-gradient-bg flex items-center justify-center mr-2">
                3
              </div>
              <span className="font-inter text-[20px]">
                Register and receive tokens PIO
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails className="rounded-b-2xl font-inter text-[16px] text-white">
            Register or log in: Once installed, open the app, create a new
            account, or log in (if you already have an account) to start playing
            and exploring the blockchain world of PIONE GAME.
          </AccordionDetails>
        </Accordion>
      </div>
    </ThemeProvider>
  );
}
