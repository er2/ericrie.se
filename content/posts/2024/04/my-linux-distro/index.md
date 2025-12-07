---
title: "My Linux Distro"
date: 2024-04-14
---

Features I would put into a Linux distro if I made one.

## grub-btrfs

I love the idea that if I screw something up, I can simply reboot to roll it back. AFAICT, I can't retrofit this to my current Arch install, so I think this is a good thing to bake by default into the installer.

Also related to btrfs, the GUI tools snapper and timeshift can integrate into btrfs, but by default they rely on a certain conventional btrfs subvolume structure that I don't have since my Arch install was just the default `arch_install` script, so fix that.

I like the idea of immutable OSes but in practice having to reboot after doing an install isn't worth it. If I'm worried about screwing things up by installing something new, I'll do it in a [toolbox](https://github.com/containers/toolbox). So install that by default.

Also let's install `etckeeper` by default. And I'd like a GUI that unifies all btrfs snapshots, timeshift/duplicity style backups, and etckeeper commits into one place so if I have an issue that I'm unsure about, I can see a timeline of changes and make a guess about what might have broken based on roughly when I think the breakage started.

## WPS

I love the convenience of using [WPS](https://en.wikipedia.org/wiki/Wi-Fi_Protected_Setup#:~:text=method.%5B6%5D-,Push%20button%20method,-In%20which%20the) to set up my WiFi. I think the installer should nudge the user to use this since it creates the best case experience.

## Repository Mirrors

I like to detect the closest/fastest repository mirror near me and use that. I like how easy Ubuntu makes it. I think it's worth making it part of the installation process since it can be a single click skippable step that can really speed things up.

## Net-install by default

I like net-install ISOs since they result in a totally up-to-date installation on first boot.

## find-the-command

I like how when you try to run a program that you don't have installed in Ubuntu, it tries to figure out what package provides that executable and recommends you install it. I have `find-the-command` installed in Arch, but it doesn't work as well as in Ubuntu, at least as I have it set up right now.

## Personalizations

Just stuff I like

- `fish` shell

- `system-load-indicator`

- `nushell`

- `podman` and `podman-desktop`

- `gnome-boxes`

- `micro` text editor

- `unifont` and `noto` fonts for Unicode coverage to avoid seeing �s

- `tree`

- `ncdu`

## Pre-configured software sources

If you use flatpak, 99% of the time you're downloading the flatpaks from Flathub. If you use podman, 99% of the time you're downloading the container images from Dockerhub. It's annoying to have to do an extra step to configure these sources the first time. Just be real and configure them by default, or make it a single click affair to set them up.

## Base

I currently use Arch, so that's my top pick for a base. I really just like that with AUR and the popularity of Arch, Arch seems to give the best experience when I try to install whatever random new little project I find on Hacker News. And I'm happy with the rolling release model.
