# TorCommander - The Toralizer

## Overview

**TorCommander** is a Linux-based tool designed to enhance anonymity by routing system commands through the **Tor network**. It allows users to execute commands securely while hiding their IP and location.

This project was inspired by **Dr. Jones Birch**, a YouTuber who explores cybersecurity and anonymity topics. We have expanded on the idea, making it open-source and accessible for further development.

## Features

- **Tor Integration:** Routes commands through the Tor network for enhanced privacy.
- **Command Toralization:** Converts standard Linux commands into Tor network clients using the `toralize` keyword.
- **Geolocation Masking:** Ensures that the user's IP and location remain hidden.
- **Modular Design:** Consists of core files (`toralize.c`, `toralize.h`, `Makefile`) for easy compilation and integration.
- **Open-Source & Community-Driven:** Anyone can contribute to improve and expand the project.

## Installation

### Prerequisites

Ensure the following dependencies are installed:

- **Tor**: Make sure the Tor service is installed and running on your system.
- **GCC**: The GNU Compiler Collection for compiling C programs.
- **Make**: For building the project using the `Makefile`.

You can install these dependencies on most Linux distributions by running the following:

```bash
sudo apt update
sudo apt install tor gcc make
