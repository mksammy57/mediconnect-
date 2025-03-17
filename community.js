
// Community page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Community page elements
  const postsContainer = document.getElementById('posts-container');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const postForm = document.querySelector('.post-creation form');
  const postTextarea = document.querySelector('.post-creation textarea');
  
  // Sample post data - in a real app, this would come from an API
  const samplePosts = [
    {
      id: 1,
      author: {
        id: 101,
        name: "Dr. Sarah Johnson",
        title: "Cardiologist • 15 years exp",
        avatar: "SJ",
        verified: true,
        following: false
      },
      title: "New Study on Heart Disease Prevention",
      content: "A recent study published in the Journal of Cardiology suggests that incorporating just 30 minutes of moderate exercise daily can reduce the risk of heart disease by up to 30%. This finding is significant as it demonstrates that even small lifestyle changes can have substantial impacts on cardiovascular health.",
      tags: ["cardiology", "research", "prevention"],
      timestamp: "2 hours ago",
      likes: 128,
      comments: 32,
      shares: 18,
      liked: false,
      bookmarked: false,
      commentsList: [
        {
          id: 201,
          author: {
            name: "Mike Chen",
            title: "Medical Student",
            avatar: "MC"
          },
          content: "This is really interesting! Do you think high-intensity interval training would be more effective than steady-state cardio?",
          timestamp: "1 hour ago",
          likes: 12
        },
        {
          id: 202,
          author: {
            name: "Dr. Emily Rodriguez",
            title: "Family Medicine",
            avatar: "ER",
            verified: true
          },
          content: "I've been recommending this to my patients for years. It's nice to see more research supporting it!",
          timestamp: "45 minutes ago",
          likes: 8
        }
      ]
    },
    {
      id: 2,
      author: {
        id: 102,
        name: "Lisa Kumar",
        title: "Medical Student • Year 3",
        avatar: "LK",
        verified: false,
        following: true
      },
      title: "Resources for USMLE Step 1",
      content: "I just passed Step 1 and wanted to share the resources that helped me the most. First Aid was my bible, supplemented with Pathoma for pathology and Sketchy for micro and pharm. What resources did you find most helpful?",
      tags: ["USMLE", "medical students", "resources"],
      timestamp: "5 hours ago",
      likes: 94,
      comments: 27,
      shares: 15,
      liked: true,
      bookmarked: true,
      commentsList: [
        {
          id: 203,
          author: {
            name: "James Wilson",
            title: "Medical Student",
            avatar: "JW"
          },
          content: "Congratulations! I'm using UWorld + Anki and finding it really effective. How many months did you spend preparing?",
          timestamp: "4 hours ago",
          likes: 5
        }
      ]
    },
    {
      id: 3,
      author: {
        id: 103,
        name: "Dr. Robert Thompson",
        title: "Orthopedic Surgeon • 18 years exp",
        avatar: "RT",
        verified: true,
        following: false
      },
      title: "Long COVID Recovery and Joint Pain",
      content: "I'm seeing an increasing number of patients with persistent joint pain after COVID-19 infection. Is anyone else observing similar patterns? I'm particularly interested in effective treatment protocols that have worked for you.",
      tags: ["COVID-19", "orthopedics", "chronic pain"],
      timestamp: "1 day ago",
      likes: 215,
      comments: 56,
      shares: 42,
      liked: false,
      bookmarked: false,
      commentsList: [
        {
          id: 204,
          author: {
            name: "Dr. Maria Garcia",
            title: "Rheumatologist",
            avatar: "MG",
            verified: true
          },
          content: "Yes, I've had similar cases. I'm finding that a combination of low-dose corticosteroids along with physical therapy has been showing promising results in my patients.",
          timestamp: "22 hours ago",
          likes: 24
        },
        {
          id: 205,
          author: {
            name: "Dr. David Lee",
            title: "Immunologist",
            avatar: "DL",
            verified: true
          },
          content: "We need more research on this, but I suspect there's an autoimmune component. Has anyone tried IL-6 inhibitors in severe cases?",
          timestamp: "18 hours ago",
          likes: 19
        }
      ]
    },
    {
      id: 4,
      author: {
        id: 104,
        name: "Amy Zhang",
        title: "Patient Advocate",
        avatar: "AZ",
        verified: false,
        following: false
      },
      title: "Mental Health Resources for Patients",
      content: "I've compiled a list of free and low-cost mental health resources for patients without insurance. These include community clinics, online therapy options, and support groups. Would anyone be interested in reviewing and adding to this resource?",
      tags: ["mental health", "resources", "patient care"],
      timestamp: "2 days ago",
      likes: 187,
      comments: 41,
      shares: 73,
      liked: false,
      bookmarked: false,
      commentsList: []
    }
  ];
  
  // Group data - in a real app, this would come from an API
  const medicalGroups = [
    {
      id: 1,
      name: "Medical Students Network",
      members: 1245,
      memberStatus: "member", // joined, pending, not joined
      posts: 342,
      description: "A supportive community for medical students to discuss studies, exams, and clinical experiences.",
      featuredTopics: ["USMLE", "Clinical Rotations", "Residency Applications"]
    },
    {
      id: 2,
      name: "Healthcare Professionals",
      members: 3782,
      memberStatus: "not-member",
      posts: 1243,
      description: "Connect with doctors, nurses, and allied health professionals to discuss the latest in medical practice.",
      featuredTopics: ["Clinical Guidelines", "Patient Management", "Healthcare Policy"]
    },
    {
      id: 3,
      name: "Chronic Illness Support",
      members: 942,
      memberStatus: "pending",
      posts: 521,
      description: "A safe space for patients and caregivers dealing with long-term health conditions.",
      featuredTopics: ["Pain Management", "Treatment Options", "Lifestyle Adaptations"]
    },
    {
      id: 4,
      name: "Medical Research & Innovation",
      members: 562,
      memberStatus: "not-member",
      posts: 245,
      description: "Discuss the latest medical research, clinical trials, and healthcare innovations.",
      featuredTopics: ["New Studies", "Clinical Trials", "Medical Technology"]
    }
  ];

  // Load posts when page loads
  displayPosts(samplePosts, 'latest');
  setupGroupFunctionality(medicalGroups);
  
  // Event listeners for filter tabs
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Load posts with selected filter
      let filteredPosts = [...samplePosts];
      
      if (filter === 'popular') {
        filteredPosts.sort((a, b) => b.likes - a.likes);
      } else if (filter === 'unanswered') {
        filteredPosts = filteredPosts.filter(post => post.comments === 0);
      } else if (filter === 'following') {
        filteredPosts = filteredPosts.filter(post => post.author.following);
      }
      
      displayPosts(filteredPosts, filter);
    });
  });
  
  // Event listeners for post creation
  if (postForm) {
    postForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const postContent = postTextarea.value.trim();
      
      if (postContent) {
        createNewPost(postContent);
        postTextarea.value = '';
      }
    });
  }
  
  // Function to create a new post
  function createNewPost(content) {
    const newPost = {
      id: samplePosts.length + 1,
      author: {
        id: 999,
        name: "Current User",
        title: "Medical Student",
        avatar: "CU",
        verified: false,
        following: false
      },
      title: content.split(' ').slice(0, 5).join(' ') + '...',
      content: content,
      tags: [],
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
      liked: false,
      bookmarked: false,
      commentsList: []
    };
    
    // Add to the beginning of the posts array
    samplePosts.unshift(newPost);
    
    // Refresh the posts display
    displayPosts(samplePosts, 'latest');
    
    // Show success toast
    showToast('Post created successfully!', 'success');
  }

  // Function to display posts
  function displayPosts(posts, filter) {
    if (!postsContainer) return;

    if (posts.length === 0) {
      postsContainer.innerHTML = `
        <div class="no-results">
          <i class="fas fa-comment-slash"></i>
          <p>No posts found. Be the first to start a discussion!</p>
        </div>
      `;
      return;
    }

    let html = '';
    posts.forEach(post => {
      // Get tag HTML
      let tagsHtml = '';
      if (post.tags && post.tags.length > 0) {
        post.tags.forEach(tag => {
          tagsHtml += `<div class="tag">#${tag}</div>`;
        });
      }

      // Get verified badge
      const verifiedBadge = post.author.verified ? 
        '<span class="verified-badge" title="Verified Healthcare Professional"><i class="fas fa-check-circle"></i></span>' : '';
      
      // Get liked/bookmarked state
      const likedClass = post.liked ? 'liked fas' : 'far';
      const bookmarkedClass = post.bookmarked ? 'fas' : 'far';
      
      // Generate comments HTML
      let commentsHtml = '';
      if (post.commentsList && post.commentsList.length > 0) {
        commentsHtml = `
          <div class="comment-section">
            <h4>${post.comments} Comments</h4>
            <div class="comments-list">
        `;
        
        post.commentsList.forEach(comment => {
          const commentVerifiedBadge = comment.author.verified ? 
            '<span class="verified-badge" title="Verified Healthcare Professional"><i class="fas fa-check-circle"></i></span>' : '';
            
          commentsHtml += `
            <div class="comment" data-comment-id="${comment.id}">
              <div class="comment-header">
                <div class="comment-author">
                  <div class="author-avatar">${comment.author.avatar}</div>
                  <div>
                    <span class="author-name">${comment.author.name} ${commentVerifiedBadge}</span>
                    <span class="author-title">${comment.author.title}</span>
                  </div>
                </div>
                <div class="comment-time">${comment.timestamp}</div>
              </div>
              <div class="comment-body">
                ${comment.content}
              </div>
              <div class="comment-actions">
                <button class="comment-like-btn" data-comment-id="${comment.id}">
                  <i class="far fa-heart"></i> <span>${comment.likes}</span>
                </button>
                <button class="comment-reply-btn" data-comment-id="${comment.id}">
                  <i class="far fa-comment"></i> Reply
                </button>
              </div>
            </div>
          `;
        });
        
        commentsHtml += `
              <div class="comment-input">
                <div class="author-avatar">CU</div>
                <input type="text" placeholder="Write a comment..." class="add-comment-input" data-post-id="${post.id}">
                <button class="send-comment-btn" data-post-id="${post.id}"><i class="fas fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        `;
      } else {
        commentsHtml = `
          <div class="comment-section" style="display: none;">
            <h4>0 Comments</h4>
            <div class="comment-input">
              <div class="author-avatar">CU</div>
              <input type="text" placeholder="Write a comment..." class="add-comment-input" data-post-id="${post.id}">
              <button class="send-comment-btn" data-post-id="${post.id}"><i class="fas fa-paper-plane"></i></button>
            </div>
          </div>
        `;
      }

      html += `
        <div class="post-card" data-post-id="${post.id}">
          <div class="post-header">
            <div class="post-author">
              <div class="author-avatar">${post.author.avatar}</div>
              <div class="author-info">
                <h4>${post.author.name} ${verifiedBadge}</h4>
                <p>${post.author.title}</p>
              </div>
            </div>
            <div class="post-options">
              <button class="follow-btn" data-author-id="${post.author.id}">
                ${post.author.following ? 'Following' : 'Follow'}
              </button>
              <div class="post-time">${post.timestamp}</div>
            </div>
          </div>

          <div class="post-content">
            <h3>${post.title}</h3>
            <p>${post.content}</p>
          </div>

          <div class="post-tags">
            ${tagsHtml}
          </div>

          <div class="post-actions">
            <div class="action-buttons">
              <button class="action-btn like-btn ${post.liked ? 'liked' : ''}" data-post-id="${post.id}">
                <i class="${likedClass} fa-heart"></i> <span>${post.likes}</span>
              </button>
              <button class="action-btn comment-btn" data-post-id="${post.id}">
                <i class="far fa-comment"></i> <span>${post.comments}</span>
              </button>
              <button class="action-btn share-btn" data-post-id="${post.id}">
                <i class="far fa-share-square"></i> <span>${post.shares}</span>
              </button>
            </div>
            <button class="action-btn bookmark-btn" data-post-id="${post.id}">
              <i class="${bookmarkedClass} fa-bookmark"></i>
            </button>
          </div>
          
          ${commentsHtml}
        </div>
      `;
    });

    postsContainer.innerHTML = html;

    // Add event listeners to post actions
    addPostActionListeners();
  }

  // Function to add event listeners to post actions
  function addPostActionListeners() {
    // Like buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const postId = parseInt(this.getAttribute('data-post-id'));
        const icon = this.querySelector('i');
        const count = this.querySelector('span');
        const post = samplePosts.find(p => p.id === postId);
        
        if (!post) return;

        if (!post.liked) {
          // Like post
          icon.classList.replace('far', 'fas');
          icon.classList.add('liked');
          post.likes++;
          post.liked = true;
          count.textContent = post.likes;
          this.classList.add('liked');
        } else {
          // Unlike post
          icon.classList.replace('fas', 'far');
          icon.classList.remove('liked');
          post.likes--;
          post.liked = false;
          count.textContent = post.likes;
          this.classList.remove('liked');
        }
      });
    });

    // Comment buttons
    const commentButtons = document.querySelectorAll('.comment-btn');
    commentButtons.forEach(button => {
      button.addEventListener('click', function() {
        const postId = parseInt(this.getAttribute('data-post-id'));
        const post = samplePosts.find(p => p.id === postId);
        if (!post) return;
        
        const commentSection = this.closest('.post-card').querySelector('.comment-section');
        if (commentSection.style.display === 'none') {
          commentSection.style.display = 'block';
          // Focus the comment input
          setTimeout(() => {
            const commentInput = commentSection.querySelector('.add-comment-input');
            if (commentInput) commentInput.focus();
          }, 100);
        } else {
          commentSection.style.display = 'none';
        }
      });
    });
    
    // Comment input
    const commentInputs = document.querySelectorAll('.add-comment-input');
    commentInputs.forEach(input => {
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          const postId = parseInt(this.getAttribute('data-post-id'));
          addComment(postId, this.value.trim());
          this.value = '';
        }
      });
    });
    
    // Send comment buttons
    const sendCommentBtns = document.querySelectorAll('.send-comment-btn');
    sendCommentBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const postId = parseInt(this.getAttribute('data-post-id'));
        const input = this.previousElementSibling;
        addComment(postId, input.value.trim());
        input.value = '';
      });
    });

    // Share buttons
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
      button.addEventListener('click', function() {
        const postId = parseInt(this.getAttribute('data-post-id'));
        const post = samplePosts.find(p => p.id === postId);
        if (!post) return;
        
        // Increase share count
        post.shares++;
        this.querySelector('span').textContent = post.shares;
        
        // Show share dialog
        showShareDialog(post);
      });
    });

    // Bookmark buttons
    const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
    bookmarkButtons.forEach(button => {
      button.addEventListener('click', function() {
        const postId = parseInt(this.getAttribute('data-post-id'));
        const post = samplePosts.find(p => p.id === postId);
        if (!post) return;
        
        const icon = this.querySelector('i');
        
        if (!post.bookmarked) {
          // Bookmark post
          icon.classList.replace('far', 'fas');
          post.bookmarked = true;
          showToast('Post saved to bookmarks', 'success');
        } else {
          // Remove bookmark
          icon.classList.replace('fas', 'far');
          post.bookmarked = false;
          showToast('Post removed from bookmarks', 'info');
        }
      });
    });
    
    // Follow buttons
    const followButtons = document.querySelectorAll('.follow-btn');
    followButtons.forEach(button => {
      button.addEventListener('click', function() {
        const authorId = parseInt(this.getAttribute('data-author-id'));
        const author = findAuthorById(authorId);
        if (!author) return;
        
        author.following = !author.following;
        this.textContent = author.following ? 'Following' : 'Follow';
        
        if (author.following) {
          showToast(`You are now following ${author.name}`, 'success');
        } else {
          showToast(`You unfollowed ${author.name}`, 'info');
        }
      });
    });
    
    // Comment like buttons
    const commentLikeButtons = document.querySelectorAll('.comment-like-btn');
    commentLikeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const commentId = parseInt(this.getAttribute('data-comment-id'));
        const icon = this.querySelector('i');
        const count = this.querySelector('span');
        
        if (icon.classList.contains('far')) {
          // Like comment
          icon.classList.replace('far', 'fas');
          icon.classList.add('liked');
          count.textContent = parseInt(count.textContent) + 1;
        } else {
          // Unlike comment
          icon.classList.replace('fas', 'far');
          icon.classList.remove('liked');
          count.textContent = parseInt(count.textContent) - 1;
        }
      });
    });
    
    // Comment reply buttons
    const commentReplyButtons = document.querySelectorAll('.comment-reply-btn');
    commentReplyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const commentId = parseInt(this.getAttribute('data-comment-id'));
        const comment = this.closest('.comment');
        const authorName = comment.querySelector('.author-name').textContent.trim().split(' ')[0];
        
        // Find the parent post's comment input
        const commentSection = this.closest('.comment-section');
        const commentInput = commentSection.querySelector('.add-comment-input');
        
        // Pre-fill the comment input with @mention
        commentInput.value = `@${authorName} `;
        commentInput.focus();
      });
    });
  }
  
  // Function to add a comment to a post
  function addComment(postId, content) {
    if (!content) return;
    
    const post = samplePosts.find(p => p.id === postId);
    if (!post) return;
    
    const newComment = {
      id: Date.now(),
      author: {
        name: "Current User",
        title: "Medical Student",
        avatar: "CU",
        verified: false
      },
      content: content,
      timestamp: "Just now",
      likes: 0
    };
    
    if (!post.commentsList) {
      post.commentsList = [];
    }
    
    post.commentsList.push(newComment);
    post.comments++;
    
    // Refresh the posts display
    displayPosts(samplePosts, getCurrentFilter());
    
    // Show success toast
    showToast('Comment added successfully!', 'success');
  }
  
  // Function to show share dialog
  function showShareDialog(post) {
    // Create the share dialog
    const shareDialog = document.createElement('div');
    shareDialog.className = 'share-dialog';
    shareDialog.innerHTML = `
      <div class="share-dialog-content">
        <div class="share-dialog-header">
          <h3>Share Post</h3>
          <button class="close-share-dialog"><i class="fas fa-times"></i></button>
        </div>
        <div class="share-options">
          <div class="share-option">
            <i class="fas fa-envelope"></i>
            <span>Email</span>
          </div>
          <div class="share-option">
            <i class="fab fa-twitter"></i>
            <span>Twitter</span>
          </div>
          <div class="share-option">
            <i class="fab fa-facebook"></i>
            <span>Facebook</span>
          </div>
          <div class="share-option">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </div>
          <div class="share-option">
            <i class="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </div>
        </div>
        <div class="share-link">
          <input type="text" value="https://mediconnect.com/community/post/${post.id}" readonly>
          <button class="copy-link-btn">Copy Link</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(shareDialog);
    
    // Add event listeners
    const closeBtn = shareDialog.querySelector('.close-share-dialog');
    closeBtn.addEventListener('click', function() {
      document.body.removeChild(shareDialog);
    });
    
    const copyLinkBtn = shareDialog.querySelector('.copy-link-btn');
    copyLinkBtn.addEventListener('click', function() {
      const linkInput = shareDialog.querySelector('input');
      linkInput.select();
      document.execCommand('copy');
      
      this.textContent = 'Copied!';
      setTimeout(() => {
        this.textContent = 'Copy Link';
      }, 2000);
    });
    
    const shareOptions = shareDialog.querySelectorAll('.share-option');
    shareOptions.forEach(option => {
      option.addEventListener('click', function() {
        const platform = this.querySelector('span').textContent;
        showToast(`Shared to ${platform}`, 'success');
        document.body.removeChild(shareDialog);
      });
    });
    
    // Close on click outside
    shareDialog.addEventListener('click', function(e) {
      if (e.target === shareDialog) {
        document.body.removeChild(shareDialog);
      }
    });
  }

  // Function to get the current active filter
  function getCurrentFilter() {
    const activeTab = document.querySelector('.filter-tab.active');
    return activeTab ? activeTab.getAttribute('data-filter') : 'latest';
  }
  
  // Function to find author by ID
  function findAuthorById(authorId) {
    for (let post of samplePosts) {
      if (post.author.id === authorId) {
        return post.author;
      }
    }
    return null;
  }
  
  // Function to show toast message
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }
  
  // Group functionality
  function setupGroupFunctionality(groups) {
    const groupsContainer = document.querySelector('.popular-groups');
    if (!groupsContainer) return;
    
    let html = '';
    groups.forEach(group => {
      let joinBtnText, joinBtnClass;
      
      switch(group.memberStatus) {
        case 'member':
          joinBtnText = 'Joined';
          joinBtnClass = 'joined';
          break;
        case 'pending':
          joinBtnText = 'Pending';
          joinBtnClass = 'pending';
          break;
        default:
          joinBtnText = 'Join';
          joinBtnClass = '';
      }
      
      html += `
        <div class="group" data-group-id="${group.id}">
          <div class="group-info">
            <div class="group-name">${group.name}</div>
            <div class="group-members">${group.members} members • ${group.posts} posts</div>
            <div class="group-description">${group.description}</div>
          </div>
          <button class="join-group-btn ${joinBtnClass}" data-group-id="${group.id}">
            ${joinBtnText}
          </button>
        </div>
      `;
    });
    
    groupsContainer.innerHTML = html;
    
    // Add event listeners to join buttons
    const joinButtons = document.querySelectorAll('.join-group-btn');
    joinButtons.forEach(button => {
      button.addEventListener('click', function() {
        const groupId = parseInt(this.getAttribute('data-group-id'));
        const group = groups.find(g => g.id === groupId);
        if (!group) return;
        
        switch(group.memberStatus) {
          case 'member':
            // Leave group
            group.memberStatus = 'not-member';
            group.members--;
            this.textContent = 'Join';
            this.className = 'join-group-btn';
            showToast(`You left ${group.name}`, 'info');
            break;
          case 'pending':
            // Cancel request
            group.memberStatus = 'not-member';
            this.textContent = 'Join';
            this.className = 'join-group-btn';
            showToast(`Request to join ${group.name} canceled`, 'info');
            break;
          default:
            // Join group
            group.memberStatus = 'member';
            group.members++;
            this.textContent = 'Joined';
            this.className = 'join-group-btn joined';
            showToast(`You joined ${group.name}`, 'success');
        }
      });
    });
    
    // Make groups clickable to view details
    const groupElements = document.querySelectorAll('.group');
    groupElements.forEach(groupEl => {
      groupEl.addEventListener('click', function(e) {
        // Don't open group page if join button was clicked
        if (e.target.classList.contains('join-group-btn')) return;
        
        const groupId = parseInt(this.getAttribute('data-group-id'));
        const group = groups.find(g => g.id === groupId);
        if (!group) return;
        
        alert(`View group: ${group.name} (Coming soon)`);
      });
    });
  }
});
