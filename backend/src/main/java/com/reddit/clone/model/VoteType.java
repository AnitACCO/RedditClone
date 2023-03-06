package com.reddit.clone.model;

import java.util.Arrays;
import java.util.Optional;

public enum VoteType {
    UPVOTE(1), DOWNVOTE(-1),
    ;


    VoteType(int direction) {
    }


}