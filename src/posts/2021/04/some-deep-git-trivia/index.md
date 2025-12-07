---
title: "Some Deep git Trivia"
date: 2021-04-16
---

A typo lead me down a little rabbit hole today.

The typo was `git pul` instead of `git pull`

```
~ git pul
git: 'pul' is not a git command. See 'git --help'.

The most similar commands are
	pull
	spull
```

`git spull`? That sounds funny. What does that do? Google results for it are disappointing. (Ripe SEO for this blog post).

```
~ git spull --help
'spull' is aliased to 'svn rebase'
```

Hmm... How do I list all my aliases?

```

~ git alias --help
'alias' is aliased to '!git config --list | grep 'alias\.' | sed 's/alias\.\([^=]*\)=\(.*\)/\1\	 => \2/' | sort'
```

Hmm...

```
~ git alias
a	 => !git add . && git status
aa	 => !git add . && git add -u . && git status
ac	 => !git add . && git commit
acm	 => !git add . && git commit -m
alias	 => !git config --list | grep 'alias\.' | sed 's/alias\.\([^=]*\)=\(.*\)/\1\	 => \2/' | sort
au	 => !git add -u . && git status
c	 => commit
ca	 => commit --amend
cm	 => commit -m
d	 => diff
l	 => log --graph --all --pretty=format:'%C(yellow)%h%C(cyan)%d%Creset %s %C(white)- %an, %ar%Creset'
lg	 => log --color --graph --pretty=format:'%C(bold white)%h%Creset -%C(bold green)%d%Creset %s %C(bold green)(%cr)%Creset %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
ll	 => log --stat --abbrev-commit
llg	 => log --color --graph --pretty=format:'%C(bold white)%H %d%Creset%n%s%n%+b%C(bold blue)%an <%ae>%Creset %C(bold green)%cr (%ci)' --abbrev-commit
master	 => checkout master
s	 => status
spull	 => svn rebase
spush	 => svn dcommit
```

So if you like to create short little aliases, think about using some of these built in ones instead so they'll be pre-configured for you everywhere.

I like to use a gui for viewing history, but `git l`, `git ll`, `git lg` and `git llg` are pretty nice.

I also tried

```
~ git spull
Can't locate SVN/Core.pm in @INC (you may need to install the SVN::Core module) (@INC contains: /usr/local/git/share/perl5 /Library/Perl/5.18/darwin-thread-multi-2level /Library/Perl/5.18 /Network/Library/Perl/5.18/darwin-thread-multi-2level /Network/Library/Perl/5.18 /Library/Perl/Updates/5.18.4 /System/Library/Perl/5.18/darwin-thread-multi-2level /System/Library/Perl/5.18 /System/Library/Perl/Extras/5.18/darwin-thread-multi-2level /System/Library/Perl/Extras/5.18 .) at /usr/local/git/share/perl5/Git/SVN/Utils.pm line 6.
BEGIN failed--compilation aborted at /usr/local/git/share/perl5/Git/SVN/Utils.pm line 6.
Compilation failed in require at /usr/local/git/share/perl5/Git/SVN.pm line 25.
BEGIN failed--compilation aborted at /usr/local/git/share/perl5/Git/SVN.pm line 32.
Compilation failed in require at /usr/local/git/libexec/git-core/git-svn line 22.
BEGIN failed--compilation aborted at /usr/local/git/libexec/git-core/git-svn line 22.
```

Interesting. So `git` has some SVN functionality partially built in but it depends on some perl modules.

So that's just an interesting exploration into some functionality built into git that you might not know existed.
