"use client";

import { useState, KeyboardEvent } from "react";
import Image from "next/image";

interface EntryTerminalModalProps {
  onEnter: () => void;
}

export default function EntryTerminalModal({ onEnter }: EntryTerminalModalProps) {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<Array<{ id: number; type: "sys" | "user" | "err" | "ok"; text: string }>>([
    { id: 1, type: "sys", text: "[SYS_INIT] Bioluminescent blacklight core loaded." },
    { id: 2, type: "sys", text: "[STATUS] Type command 'enter' or click a quick chip below." }
  ]);
  const [redirected, setRedirected] = useState(false);

  const executeRedirect = () => {
    setRedirected(true);
    onEnter();
  };

  const processCommand = (cmdStr: string) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    const newLogs = [...logs, { id: Date.now(), type: "user" as const, text: `sdc@vitbhopal:~$ ${raw}` }];

    const launchCmds = ["enter", "run", "start", "build", "sdc", "npm start", "launch", "sudo enter", "git push", "run sdc", "enter sdc"];

    if (launchCmds.some((c) => raw.includes(c))) {
      newLogs.push({ id: Date.now() + 1, type: "ok", text: "[OK] COMMAND ACCEPTED. IGNITING PSYCHEDELIC REALM..." });
      setLogs(newLogs);
      executeRedirect();
    } else if (raw === "help") {
      newLogs.push({
        id: Date.now() + 1,
        type: "sys",
        text: "Available Commands: enter, run sdc, build, info, clear"
      });
      setLogs(newLogs);
    } else if (raw === "info") {
      newLogs.push({
        id: Date.now() + 1,
        type: "sys",
        text: "[SDC INFO] Software Development Club @ VIT Bhopal. 100+ Members, 45+ Projects, ₹5L+ Hackathons."
      });
      setLogs(newLogs);
    } else if (raw === "clear") {
      setLogs([]);
    } else {
      newLogs.push({
        id: Date.now() + 1,
        type: "err",
        text: `Command '${raw}' not found. Type 'enter' or 'help'.`
      });
      setLogs(newLogs);
    }

    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(inputVal);
    }
  };

  if (redirected) return null;

  return (
    <div id="psychedelic-entry-portal" className={redirected ? "redirected" : ""}>
      <div className="uv-entry-content">
        {/* Official SDC Logo Badge */}
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#FF007F] shadow-[0_0_35px_#FF007F] animate-pulse">
          <Image
            src="/sdc-logo.png"
            alt="SDC Official Logo"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="section-tag mb-3">
          <i className="fas fa-terminal"></i> SYSTEM ENTRY GATEWAY // VIT BHOPAL
        </div>

        <h1 className="section-title text-4xl sm:text-6xl font-bold mt-2">
          SOFTWARE DEVELOPMENT <span className="text-gradient">CLUB</span>
        </h1>
        <p className="section-subtitle text-sm sm:text-base text-zinc-400 mt-2">
          Type a command below (e.g. <code className="text-[#39FF14]">enter</code> or <code className="text-[#00F0FF]">run sdc</code>) to launch the platform.
        </p>

        {/* UV Cyber Terminal Window */}
        <div className="uv-terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="t-dot red"></span>
              <span className="t-dot yellow"></span>
              <span className="t-dot green"></span>
            </div>
            <span className="terminal-title">SDC_CYBER_TERMINAL_v2.6.sh</span>
            <span className="text-xs text-[#39FF14] flex items-center gap-1">
              <i className="fas fa-circle text-[8px]"></i> READY
            </span>
          </div>

          <div className="terminal-body">
            <div className="terminal-output" id="terminal-output">
              {logs.map((log) => (
                <p key={log.id}>
                  {log.type === "sys" && <span className="text-[#FF4500]">[SYS] </span>}
                  {log.type === "ok" && <span className="text-[#39FF14] font-bold">[OK] </span>}
                  {log.type === "err" && <span className="text-[#FF007F]">[ERR] </span>}
                  <span className={log.type === "user" ? "text-white" : ""}>{log.text}</span>
                </p>
              ))}
            </div>

            <div className="terminal-prompt-row">
              <span className="prompt-label">sdc@vitbhopal:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                placeholder="Type 'enter' or 'run'..."
                autoFocus
              />
              <button onClick={() => processCommand(inputVal)} className="terminal-submit-btn">
                EXECUTE <i className="fas fa-play text-[10px]"></i>
              </button>
            </div>

            {/* Quick Command Chips */}
            <div className="terminal-chips">
              <span className="text-xs text-zinc-500">Quick Run:</span>
              <button onClick={() => processCommand("enter")} className="command-chip">&gt; enter</button>
              <button onClick={() => processCommand("run sdc")} className="command-chip">&gt; run sdc</button>
              <button onClick={() => processCommand("npm start")} className="command-chip">&gt; npm start</button>
              <button onClick={() => processCommand("git push")} className="command-chip">&gt; git push</button>
              <button onClick={() => processCommand("help")} className="command-chip">&gt; help</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
