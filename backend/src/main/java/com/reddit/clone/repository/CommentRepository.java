package com.reddit.clone.repository;

import com.reddit.clone.model.Comment;
import com.reddit.clone.model.Post;
import com.reddit.clone.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByPost(Post post);

    List<Comment> findAllByUser(User user);
}
