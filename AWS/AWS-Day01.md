# AWS

## Cloud Computing

Cloud Computing is the delivery of computing services—such as servers, storage, databases, networking, software, analytics, and intelligence—over the internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.

## What is On-Premises (On-Prem)?

On-Premises refers to computing infrastructure that is physically hosted within an organization’s own facilities. The company is fully responsible for the hardware, software, networking, security, and maintenance.

---

## Static Page Example

[Medic Care GitHub Repository](https://github.com/technext/medic-care)

---

## Amazon EC2 (Elastic Compute Cloud)

Amazon EC2 is a fundamental service offered by AWS that allows users to provision resizable, virtual computing environments (instances) in the cloud. It's an Infrastructure as a Service (IaaS) designed to run applications at any scale.

### Features of EC2

* Launch virtual machines in seconds
* Select pre-configured AMIs or create custom ones
* Attach persistent storage using EBS
* Secure access via key pairs and security groups
* Scale resources based on demand
* Use Auto Scaling and Elastic Load Balancing

### Integration

EC2 integrates with:

* S3 (Storage)
* RDS (Databases)
* VPC (Networking)
* CloudWatch (Monitoring)

---

## Types of Operating Systems

* Linux / Ubuntu / Windows / macOS

### Windows OS Versions

* Vista / 7 / 8 / 10 / 11
* Server Versions: Windows Server 2012 / 2016 / 2019

### Hardware Terms

* LAPtop / Desktop
* OS, RAM, CPU (i5), Graphics Card, HDD/SSD

RAM and CPU grouped as "Size" (like in shirts: S, M, L, XL, XXL)

> Note: This "Size" terminology is commonly used in **cloud-based servers** (like AWS EC2) to help categorize instances based on their computing power and memory. For example, a "Small" instance may have 1 vCPU and 1 GB RAM, while a "Large" instance might have 8 vCPUs and 32 GB RAM. This abstraction helps users easily select suitable configurations.

### Instance Types

* NANO, MICRO
* Example: t2.micro, t3.micro
* Up to 32000 GB of RAM available

### Credentials

* Username and password
* Password: Keypair (.pem) file
* Usernames vary by OS

### Default Usernames Table

| S.NO | Operating System | Default Username       | Notes                         |
| ---- | ---------------- | ---------------------- | ----------------------------- |
| 1    | Amazon Linux     | `ec2-user`             | Common in Amazon Linux AMIs   |
| 2    | Ubuntu           | `ubuntu`               | Default for Ubuntu AMIs       |
| 3    | Debian           | `admin` or `debian`    | Depends on image provider     |
| 4    | CentOS/RHEL      | `centos` or `ec2-user` | Varies by AMI source          |
| 5    | Fedora           | `fedora`               | Fedora-specific AMIs          |
| 6    | SUSE Linux       | `ec2-user` or `root`   | Often `ec2-user`              |
| 7    | Windows Server   | `Administrator`        | RDP access; password required |
| 8    | macOS (rare)     | `admin` or custom user | Typically in VMs, not EC2     |

---

## HTTP vs HTTPS Comparison

| S.NO | Feature           | HTTP                        | HTTPS                              |
| ---- | ----------------- | --------------------------- | ---------------------------------- |
| 1    | Full Form         | HyperText Transfer Protocol | HyperText Transfer Protocol Secure |
| 2    | Port              | 80                          | 443                                |
| 3    | Security          | ❌ Not secure                | ✅ Encrypted via SSL/TLS            |
| 4    | URL Prefix        | http\://                    | https\://                          |
| 5    | Encryption        | ❌ No                        | ✅ Yes                              |
| 6    | Certificate       | ❌ Not needed                | ✅ Required (SSL/TLS)               |
| 7    | Data Protection   | Vulnerable                  | Secure against interception        |
| 8    | SEO Preference    | ❌ Not preferred             | ✅ Preferred                        |
| 9    | Browser Indicator | No lock icon                | 🔒 Lock icon                        |
| 10   | Use Case          | Internal, testing           | Public-facing, secure apps         |

### Why HTTPS Matters

* Protects credentials and sensitive data
* Builds trust
* Required for compliance
* Prevents MITM attacks

### Diagram: HTTP vs HTTPS Setup

```
User (Browser)
     |
+----+----+
|  HTTPS  | 🔒
+----+----+
     |
+----+--------+
|  Web Server   |
| (with SSL cert)|
+----+--------+
     |
Your Website Files
```

### Setup HTTPS with Certbot (Let’s Encrypt)

1. SSH into server:

```bash
ssh ubuntu@your_server_ip
```

2. Install Certbot:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
```

3. Install certificate:

```bash
sudo certbot --nginx
```

4. Test auto-renew:

```bash
sudo certbot renew --dry-run
```

Result: HTTPS enabled with lock icon

---

## 💾 **HDD (Hard Disk Drive) vs SSD (Solid State Drive)**

| S.NO | Feature           | HDD                       | SSD                              |
| ---- | ----------------- | ------------------------- | -------------------------------- |
| 1    | Technology        | Magnetic Disk             | Flash Memory                     |
| 2    | Speed             | ❌ Slower (100–150 MB/s)   | ✅ Faster (500–7000+ MB/s)        |
| 3    | Durability        | ❌ Less (mechanical parts) | ✅ More durable (no moving parts) |
| 4    | Boot Time         | 30–60 seconds             | 5–15 seconds                     |
| 5    | Power Consumption | High                      | Low                              |
| 6    | Noise             | Audible                   | Silent                           |
| 7    | Heat              | High                      | Low                              |
| 8    | Capacity          | High (up to 20TB+)        | Medium (up to 4TB consumer)      |
| 9    | Cost              | Cheaper                   | Costlier                         |
| 10   | Use Case          | Backup, bulk storage      | OS, gaming, high-speed apps      |

### SSHD: Hybrid (HDD + SSD)

---

## Launching EC2 Instance (Step-by-step)

1. Choose region: e.g., Mumbai, Singapore
2. Launch instance

   * **Name:** nickname or none
   * **Quick Start:** Amazon Linux 
   * Amazon Linux 2 AMI (HVM) - Kernel 5.10, SSD Volume Type [Free Tier]
   * **Instance Type:** t2.micro [Free Tier]  -> This will change based on location

3. Create Key Pair:

   * Type: RSA
   * Format: .pem

4. Configure Security Group:

   * Allow SSH (22), HTTP (80), source: anywhere
   * **If Port 80 (HTTP) not enabled:**
     * Web traffic blocked
     * Browsers show timeout
     * Only SSH access possible

5. Confirm instance is running

---

## Connect to EC2 Instance

Use Git Bash or command line

### Fix .pem Permissions (Windows)

1. Right-click `.pem` file → Properties → Security → Advanced
2. Remove `NT AUTHORITY\Authenticated Users`
3. Leave only: SYSTEM, Your Windows User, Administrators (if needed)
4. Set Read-only permission

### SSH Command Syntax

```bash
ssh -i "path/to/key.pem" ec2-user@public-ip
# Example:
ssh -i LinuxKey.pem ec2-user@3.110.176.61
```

### Install Apache (Linux)

```bash
sudo -i
sudo yum update -y
sudo yum install -y httpd
sudo systemctl start httpd
sudo systemctl enable httpd
```

### Apache Command Explain

| S.NO | Command                       | Explain                                                                                                                          |
| ---- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1    | `sudo -i`                     | Switch to root user (admin permission)                                                                                           |
| 2    | `sudo yum update -y`          | Update all system packages automatically (`-y` = Automatically answers "yes"** to all prompts (no manual confirmation required)) |
| 3    | `sudo yum install -y httpd`   | Install Apache web server package (httpd)                                                                                        |
| 4    | `sudo systemctl start httpd`  | Start Apache service                                                                                                             |
| 5    | `sudo systemctl enable httpd` | Enable Apache to auto-start on system boot                                                                                       |

Apache is now running → Check in browser using EC2 Public IP

### Serve HTML Page

```bash
cd /var/www/html
sudo -i

echo "<h1>Hello World from EC2 Linux Instance $(hostname -f)</h1>" > index.html
```

Visit: `http://<your_public_ip>`

---

Sure! Let me break down each command and what it does:

---

### 1. `cd /var/www/html`

* **`cd`** means **change directory**.
* This command changes the current directory to `/var/www/html`.
* This folder is the default web root directory for many web servers like Apache on Linux.
* So, anything placed inside `/var/www/html` is accessible via a web browser if the web server is running.

---

### 2. `sudo -i`

* **`sudo`** means **run a command as superuser (root)**.
* `-i` option opens an **interactive root shell**.
* This means you switch to the root user, gaining full administrative privileges.
* Useful when you need to perform multiple commands requiring root permission.

---

### 3. `echo "<h1>Hello World from EC2 Linux Instance $(hostname -f)</h1>" > index.html`

* `echo` outputs the text inside the quotes.

* The text is an HTML snippet: `<h1>Hello World from EC2 Linux Instance ...</h1>`

* `$(hostname -f)` is **command substitution**. It runs the command `hostname -f` and inserts its output here.

  * `hostname -f` returns the **fully qualified domain name (FQDN)** of the machine.

* So the full line outputs something like:

  ```html
  <h1>Hello World from EC2 Linux Instance ip-172-31-10-123.ec2.internal</h1>
  ```

* The `>` operator **redirects** the output to a file named `index.html`.

  * This means it **creates or overwrites** the file `index.html` with the HTML content.

* Since you are in `/var/www/html`, this `index.html` becomes the default page served by the web server.

---

### Summary

* You move to the web server root directory.
* Gain root access to ensure permission for file changes.
* Create or overwrite the `index.html` file with a simple HTML heading that displays "Hello World" along with the EC2 instance's hostname.
* When you visit this EC2 server via a web browser, it will show that message as the webpage.

---

### Web Servers Summary

* **Nginx**: Nginx is a high-performance, lightweight web server used on Amazon Linux to serve static files, handle reverse proxying, and load balance traffic efficiently.load balancing
* **Apache (httpd)**: Apache is a widely used open-source web server software that delivers web content by processing requests from users’ browsers, supporting both static and dynamic websites across multiple operating systems.

  * Example: When you type http://example.com in your browser, Apache running on the web server receives the request, finds the website files (like HTML, images), and sends them back so you can see the webpage.
* **IIS**: IIS (Internet Information Services) is a web server developed by Microsoft and cannot be used on Amazon Linux, as it is designed only for Windows-based EC2 instances. Microsoft web server (Windows only)

```bash
# Exits the current shell session (e.g., leaves root shell).
exit

# Clears the terminal screen.
clear

# Lists the files and directories (Folder) in the current directory.
ls

```

Here's a clear and structured documentation of the **two methods to upload a file to a Linux EC2 instance**, including all the steps and commands:

---

# 📄 **Uploading Files to a Linux EC2 Instance**

This guide demonstrates **two methods** to upload files to a Linux EC2 instance:

---

## 🔧 **Method 1: Using Command Line**

### ✅ **Steps:**

1. **Connect to EC2 Instance** using SSH:

   ```bash
   sudo ssh -i LinuxKey.pem ec2-user@3.110.176.61
   ```

2. **Navigate to the web directory:**

   ```bash
   cd /var/www/html
   ```

3. **Download the file using wget:**

   ```bash
   sudo wget https://raw.githubusercontent.com/mohan-balakrishnan/demolinux/main/app.zip
   ```

4. **Unzip the downloaded file:**

   ```bash
   sudo unzip app.zip
   ```

5. **Verify the deployment:**
   Open in browser:

   ```
   http://3.110.176.61/app/
   ```

---

## 🧰 **Method 2: Using FileZilla (GUI Tool)**

### ✅ **Pre-requisites:**

* Existing EC2 instance
* PEM key file (e.g., `LinuxKey.pem`)
* FileZilla installed on your local PC

### 📥 **Step-by-Step Guide:**

1. **Install FileZilla:**

   * Download link: [https://filezilla-project.org/download.php?type=client](https://filezilla-project.org/download.php?type=client)

2. **Change folder ownership on EC2 (so you can upload files):**
   Connect via SSH and run:

   ```bash
   sudo chown -R ec2-user /var/www/html
   ```

3. **Configure FileZilla:**

   * Open FileZilla
   * Go to `File` → `Site Manager`
   * Click `New Site` → Name it (e.g., `My EC2 Server`)
   * Set the following:

     * **Protocol**: SFTP - SSH File Transfer Protocol
     * **Host**: `3.110.176.61`
     * **Logon Type**: Key file
     * **User**: `ec2-user`
     * **Key file**: Browse and select your `LinuxKey.pem`

4. **Connect and Upload:**

   * Navigate to `/var/www/html` on the EC2 server
   * Upload your desired files (e.g., `app.zip`)

5. **Verify Upload:**

   * Open the file or app in your browser:

     ```
     http://3.110.176.61/app/
     ```

---

## Let's break down the command:

```bash
sudo chown -R ec2-user /var/www/html
```

### 🔍 Explanation:

| Part            | Meaning                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `sudo`          | Runs the command as a **superuser (admin)**. Necessary for modifying system-level directories.                                    |
| `chown`         | Short for **"change ownership"** — it's used to change the owner of files or directories.                                         |
| `-R`            | Stands for **"recursive"** — this means it will apply the change to the folder **and all its subfolders and files**.              |
| `ec2-user`      | This is the **new owner** you want to set for the directory. In this case, it's the default user on an Amazon EC2 Linux instance. |
| `/var/www/html` | This is the **target directory** whose ownership is being changed. It’s typically where web files are hosted (for Apache/Nginx).  |

---

### ✅ What This Does:

It gives full ownership of the `/var/www/html` directory (and everything inside it) to the user `ec2-user`.
This is required so that the `ec2-user` (used by SSH and FileZilla) can upload, delete, or modify files in that folder.

---

### ⚠️ Why It's Needed:

By default, `/var/www/html` is owned by the `root` user. Non-root users (like `ec2-user`) **can’t write to it** unless permissions are changed.
This command ensures `ec2-user` has the right access.

---

To convert a **GitHub open-source project URL** into a **direct ZIP file URL**, follow this simple format:

---

### ✅ **General Format:**

```
https://github.com/{username}/{repository}/archive/refs/heads/{branch}.zip
```

* `{username}` → GitHub username or organization
* `{repository}` → The name of the repository
* `{branch}` → The branch name (usually `main` or `master`)

---

### 📦 **Example:**

If the GitHub project URL is:

```
https://github.com/mohan-balakrishnan/demolinux
```

And the default branch is `main`, then the ZIP download URL is:

```
https://github.com/mohan-balakrishnan/demolinux/archive/refs/heads/main.zip
```

---

### 🔄 Alternate: Download from GitHub UI

You can also:

1. Go to the GitHub repo
2. Click the green **"Code"** button
3. Select **"Download ZIP"**

This download is exactly what the ZIP URL above points to.

---

```
https://raw.githubusercontent.com/mohan-balakrishnan/demolinux/main/app.zip
```

is **not** a ZIP of the whole GitHub project — it points to a **single file (`app.zip`) inside the repository**, specifically:

* **Repo:** `demolinux`
* **Owner:** `mohan-balakrishnan`
* **Branch:** `main`
* **Path:** `/app.zip` (a file stored at the root of the repo)

---

### 🔍 Explanation of `raw.githubusercontent.com`

* `raw.githubusercontent.com` serves **raw (direct) content** of individual files from GitHub repositories.
* It bypasses the GitHub UI and serves files **as they are**, making it ideal for:

  * Scripts
  * Installers
  * Direct downloads

---

### ⚖️ Difference Summary:

| Use Case                                    | URL                                                                       | Purpose                        |
| ------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------ |
| **Download the entire repo** as a ZIP       | `https://github.com/{user}/{repo}/archive/refs/heads/{branch}.zip`        | Full source code snapshot      |
| **Download a single file** (like `app.zip`) | `https://raw.githubusercontent.com/{user}/{repo}/{branch}/{path-to-file}` | Direct access to that one file |

---

## For this why we are not using.zip

```
https://codeload.github.com/technext/cleaning-company/zip/refs/heads/master
```

Even though it **doesn’t end in `.zip`**, it **does download a `.zip` file** when opened in a browser or accessed via tools like `wget` or `curl`.

---

### 🔍 What's Going On?

#### ✅ This is a special GitHub subdomain:

* `**codeload.github.com**` is **GitHub’s dedicated domain for serving file downloads**, especially ZIP and tarball archives.

#### 🧠 GitHub sets the proper `Content-Type` and `Content-Disposition` headers, so:

* The file is treated as a **ZIP file** by your browser or terminal tools.
* The download will automatically save as:

  ```
  cleaning-company-master.zip
  ```

---

### ✅ You *can* use it in scripts like this:

```bash
wget https://codeload.github.com/technext/cleaning-company/zip/refs/heads/master -O cleaning-company.zip
```

> `-O` renames the downloaded file to `cleaning-company.zip`.

---

### 🔁 Equivalent GUI Steps:

* Go to: `https://github.com/technext/cleaning-company`
* Click the green **Code** button → then **Download ZIP**
* That download comes from: `https://codeload.github.com/...`

---
