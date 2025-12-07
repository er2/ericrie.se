---
title: "Git freebase"
date: 2015-10-31
---

I've considered both rebase- and merge-based workflows for my projects, and I've come up with an alternative I'd like to propose as an enhancement to git.

I propose a command that would behave according to this pseudocode:

```
if (fastForwardPossible())
    git rebase <original target>
else if (rebaseWithoutConflictsPossible())
    git rebase <original target>
else {
    git rebase <conflicting commit>~ # the parent of the conflicting commit
    git merge <original target>
}
```

This has the following benefits:

- It results in a clean history whenever possible
- It highlights conflicts better than merging or rebasing

Traditional techniques in git are terrible at documenting conflicts. Conflicts are not easy to deal with. By their nature, they are encountered by only half of the people responsible for them. A prudent team should always review conflicts. In the best case, the conflict was preventable and the instigator needs to learn how to avoid creating conflicts going forward, e.g. by pulling more frequently, formatting frequently edited constants across multiple lines, or picking a random position for inserting new cases to frequently edited switch statements. In the typical case, at least both parties to a conflict should review the resolution.

A typical rebase completely hides conflicts, except when a user is diligent enough to document them in the commit message, although even in that case they will hardly pop out. It's not even totally obvious where a rebase, successful or not, has happened. You have to notice that a commit has two different timestamps for when it was committed versus authored, and even then it might have been because it was cherry-picked.

A merge is almost as bad at documenting conflicts. `gitk` doesn't show the changes introduced by a merge commit. This is bad news, because it allows totally new changes to be hidden in merge commits.

This technique serves to highlight conflicts in history. Any divergence+merge was a conflict. It sticks out like a sore thumb. And relative to a merge-only workflow, you still have an easy to follow, mostly linear history.

This strategy is also optimal in the rare but possible case in which a rebase encounters a conflict that a merge would not have. This happens when a conflicting change exists in an intermediate commit in one branch, but a subsequent commit leaves the tip of the branch in a state that doesn't conflict. It should be clarified then, that a merge will happen anytime there is a rebasing conflict. It does not mean the conflict had to be resolved manually. In that case these merges will show up as sort of false-positives of truly bad conflicts, but I believe this is still the best that could be hoped for.

This could be implemented as an option to rebase. If it were to implemented as a separate git command, or for those who would prefer to alias it, I propose the name `git freebase` as it is similar to rebase, but it allows the user to be free of the fear of poorly resolved conflicts hidden in history.

Note: this author does not condone (nor condemn) the use of drugs.
